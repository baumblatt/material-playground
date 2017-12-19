import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Device} from '@ionic-native/device';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [Device],
	bootstrap: [AppComponent]
})
export class AppModule {
}
