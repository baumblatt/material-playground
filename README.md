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
* Run `cordova build android`, build your apk file
* Run `ng serve -e cordova -port 8200`, start your dev server
* Run `cordova run android`, start your app*.

ps*: If you see this error: `Error: Current working directory is not a Cordova-based project.`, please check if `ng serve` does not delete your `www` folder, if so, just create an empty one and try start your app again.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build and `-e cordova` for Cordova version.

## Donations

Is this project util for you? Please consider [buy me a coffee](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=baumblatt%40gmail%2ecom&lc=BR&item_name=Bernardo%20Baumblatt&item_number=Material%20Playground&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_LG%2egif%3aNonHosted). 