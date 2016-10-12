/**
 * Created by MikeTran on 10/12/16.
 */
const express    = require('express');
const path       = require('path');
const app        = express();

// Routes
app.use(express.static(path.join(__dirname, '../src')));

// Routing
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/' + 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port: ', app.get('port'));
});

