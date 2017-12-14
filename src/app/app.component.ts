import {Component} from '@angular/core';

import {Device} from '@ionic-native/device';

import 'rxjs/add/operator/do';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	platform$: BehaviorSubject<string>;

	constructor(private device: Device) {
		this.platform$ = new BehaviorSubject<string>('not yet');

		Observable.fromEvent(document, 'deviceready')
				.do(() => console.log('deviceready'))
				.subscribe(() => this.platform$.next(this.device.platform));
	}

	log() {
		console.log(this.platform$.getValue());
	}
}