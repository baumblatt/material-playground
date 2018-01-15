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

Is this project util for you? Please consider buy me a coffee. 

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>