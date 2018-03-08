# Material Playground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Install dependencies

Run `yarn install` or `npm install`, to install project's dependencies.

## Web Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mobile Development server

If you want to serve to simulator or device use, follow the step below, the app will automatically reload if you change any of the source files.
* Edit the `config.xml` file and update your IP address (tip: find/replace the text `MY_IP_ADDRESS:8200).
* Run `ng build -e cordova`, this will generate the `www` folder.
* Run `cordova prepare`, this will generate the correct files to serve from `platforms\android`folder.
* Run `cordova build android`, this will build your apk file.
* Run `ng serve -e cordova -port 8200 --proxy-config proxy.conf.js`, this will start your dev server.
* Run `remotedev --hostname=MY_IP_ADDRESS --port=8000`, this will start your Redux Remote Server (if you don't have it, just install it using `npm install -g remotedev-server).
* Run `cordova run android`, start your app*.

ps*: If you see this error: `Error: Current working directory is not a Cordova-based project.`, please check if `ng serve` does not delete your `www` folder, if so, just create an empty one and try start your app again.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Updating the Angular Stuffs

###### Angular Dependencies
`npm install --save @angular/animations@latest @angular/cdk@latest @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/material @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/router@latest`
###### Angular Development Dependencies
`npm install --save-dev @angular/compiler-cli@latest @angular/language-service@latest`

###### RxJS Dependencies
`npm install --save rxjs@latest`

###### NGRX Dependencies
`npm install --save @ngrx/effects@latest @ngrx/router-store@latest @ngrx/store@latest @ngrx/store-devtools@latest`

###### NGRX Development Dependencies
`npm install --save-dev ngrx-store-freeze@latest`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Debugging with WebView on phone
* Enable on your Android SDK -> Google USB or your phone driver
* Enable on your Android Phone developer mode (tap on Android Version Number) and USB debugging
* Check if your phone is hosted using `adb devices`
* Enter Chrome at `chrome://inspect` and watch if your browser is able to connect
* Run `ng serve -e cordova -port 8200`, start your dev server
* Run `cordova run android`, start your app

## Updating Angular CLI
If you're using Angular CLI 1.0.0-beta.28 or less, you need to uninstall angular-cli package. It should be done due to changing of package's name and scope from angular-cli to @angular/cli:

* `npm uninstall -g angular-cli`
* `npm uninstall --save-dev angular-cli`

To update Angular CLI to a new version, you must update both the global package and your project's local package.

### Global package:

* `npm uninstall -g @angular/cli`
* `npm cache clean`
* if npm version is > 5 then use `npm cache verify` to avoid errors (or to avoid using --force)
* `npm install -g @angular/cli@latest`

### Local project package:

* `rm -rf node_modules dist` # use `rmdir /S/Q node_modules dist` in Windows Command Prompt; use `rm -r -fo node_modules,dist` in Windows PowerShell
* `npm install --save-dev @angular/cli@latest`
* `npm install`

## Donations

Is this project util for you? Please consider [buy me a coffee](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=baumblatt%40gmail%2ecom&lc=BR&item_name=Bernardo%20Baumblatt&item_number=Material%20Playground&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted).