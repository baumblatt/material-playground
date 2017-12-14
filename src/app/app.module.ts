import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Device} from '@ionic-native/device';

import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
	],
	providers: [Device],
	bootstrap: [AppComponent]
})
export class AppModule {
}
