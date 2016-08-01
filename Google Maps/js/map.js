$(document).ready(function(){
	var marketId = [];
	var allLatlng = [];
	var allMarkers = [];
	var marketName = [];
	var infowindow = null;
	var pos;
	var userCords;
	var tempMarkerHolder = [];

	if(navigator.geolocation) {
		function error(err){
				console.warn('Error(' + err.code + '): ' + err.message);
		}

		function success(pos){
			userCords = pos.coords;
		}

		//get user's current position
		navigator.geolocation.getCurrentPosition(success, error);
	} else {
		alert('Geolocation is not supported in your browser');
	} 

	var mapOptions = {
		zoom: 5,
		center: new google.maps.LatLng(37.09024, -100.712891),
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_LEFT
		},
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false
	}; 

	infowindow = new google.maps.InfoWindow({
		content: "holding"
	})
	//fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	$("#chooseZip").submit(function(){ //bind function to submit event of form

		var userZip = $("#textZip").val();

		var accessURL;
		if(userZip){
			accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + userZip;
		} else {
			accessURL = "http://search.ams.usda.gov/farmersmarkets/v1/data.scv/locSearch?lat=" + userCords.latitude + "&lng=" + userCords.longitude;
		}




		//Use the zip code and return all market ids in area.
		$.ajax({
			type: "GET",
			contentType: "application/json; charset=utf-8",
			url: accessURL,
			dataType: 'jsonp',
			success: function (data) {

				 $.each(data.results, function (i, val) {
					marketId.push(val.id);
					marketName.push(val.marketname);
				 });
					
				//console.log(marketName);
				
				var counter = 0;
				//Now, use the id to get detailed info
				$.each(marketId, function (k, v){
					$.ajax({
						type: "GET",
						contentType: "application/json; charset=utf-8",
						// submit a get request to the restful service mktDetail.
						url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + v,
						dataType: 'jsonp',
						success: function (data) {
						for (var key in data) {

							var results = data[key];
							
							// console.log(results);
							
							//The API returns a link to Google maps containing lat and long. This pulls it apart.
							var googleLink = results['GoogleLink'];
							var latLong = decodeURIComponent(googleLink.substring(googleLink.indexOf("=")+1, googleLink.lastIndexOf("(")));
							
							var split = latLong.split(',');
							var latitude = split[0];
							var longitude = split[1];
							
							//set the markers.	  
							myLatlng = new google.maps.LatLng(latitude,longitude);
					  
							allMarkers = new google.maps.Marker({
								position: myLatlng,
								map: map,
								title: marketName[counter],
								html: 
										'<div class="markerPop">' +
										'<h1>' + marketName[counter].substring(4) + '</h1>' + //substring removes distance from title
										'<h3>' + results['Address'] + '</h3>' +
										'<p>' + results['Products'].split(';') + '</p>' +
										'<p>' + results['Schedule'] + '</p>' +
										'</div>'
							});

							//put all lat long in array
							allLatlng.push(myLatlng);
							
							//Put the marketrs in an array
							tempMarkerHolder.push(allMarkers);
							
							counter++;
							//console.log(counter);
						};
							
							google.maps.event.addListener(allMarkers, 'click', function () {
								infowindow.setContent(this.html);
								infowindow.open(map, this);
							});
							
							
							//console.log(allLatlng);
							//  Make an array of the LatLng's of the markers you want to show
							//  Create a new viewpoint bound
							var bounds = new google.maps.LatLngBounds ();
							//  Go through each...
							for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
							  //  And increase the bounds to take this point
							  bounds.extend (allLatlng[i]);
							}
							//  Fit these bounds to the map
							map.fitBounds (bounds);
							
									
						}
					});
				}); //end .each
			}
		});

		return false; //important: prevent the form from submitting


	});



});