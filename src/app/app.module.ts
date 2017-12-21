import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CordovaService} from '@app/cordova.service';
import {MaterialModule} from '@app/material/material.module';

import {SplashScreen} from '@ionic-native/splash-screen';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule
	],
	providers: [CordovaService, SplashScreen],
	bootstrap: [AppComponent]
})
export class AppModule {
}
