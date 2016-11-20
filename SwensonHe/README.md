# SwensonHe

<img width="666" alt="screen shot 2016-11-19 at 6 04 42 pm" src="https://cloud.githubusercontent.com/assets/11032490/20459767/b3206a76-ae82-11e6-9eed-22cb8052a4f3.png">


Coffee Machine
  Product Type
  Water Line


  Example Input: COFFEE_MACHINE_LARGE
  - Water Line = False

  Example Output:
  COFFEE_POD_LARGE
  - [CP101, CP103, CP111, CP 113, CP121, CP123, CP131 CP133, CP 141, CP143]

//
// One table = Coffee Pods


-----INPUT: All Large machines
SELECT SKU_id
FROM Pod
WHERE machine_type === CM_101 OR machine_type === CM_102 OR machine_type === CM_103
JOIN Machine and Pod

-----INPUT: All pods for large machines, return only smallest pod size
SELECT SKU_id
FROM Pod
WHERE pod_size === 12 AND machine_type === CM_101 OR machine_type === CM_102 OR machine_type === CM_103

Output: [CP101, CP111, CP121, CP131, CP141]

-----INPUT: All choices on espresso vanilla landing page
SELECT SKU_id
FROM pods
WHERE pod_type = vanilla AND machine_type =  espresso
JOIN machine AND pod

-----INPUT: All espresso machines



-----INPUT: All cross-sell for espresso machine, smallest per flavor


-----INPUT: All choice on general vanilla landing page, smallest per product type




This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
