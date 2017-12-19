import {Injectable} from '@angular/core';
import {environment} from '@env/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/publishReplay';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CordovaService {

	// cordova initialization flag.
	initialized: boolean;

	// the observable of device ready
	deviceReady: Observable<boolean>;

	constructor() {
		// initialize flag
		this.initialized = false;

		// initialize the observable of device ready
		this.deviceReady = Observable.of(environment)
				.filter(env => !env.cordova)
				.merge(Observable.fromEvent(document, 'deviceready'))
				.map(() => true)
				.first();

		// initialize cordova
		this.initialize();
	}

	public initialize() {
		if (!this.initialized && environment.cordova) {
			// set the flag
			this.initialized = true;

			// create the script
			const script = document.createElement('script');

			// set cordova url
			script.src = 'cordova.js';

			// add the script before base tag
			document.head.insertBefore(script, document.head.getElementsByTagName('base')[0]);
		}
	}
}
