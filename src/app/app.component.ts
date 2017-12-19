import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {CordovaService} from '@app/cordova.service';

import {SplashScreen} from '@ionic-native/splash-screen';

import 'rxjs/add/operator/do';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router, private cordovaService: CordovaService, private splashScreen: SplashScreen) {

		// listener of cordova initialization
		cordovaService.deviceReady
				.do(() => this.router.navigateByUrl('/core'))
				.subscribe(() => this.splashScreen.hide());
	}
}
