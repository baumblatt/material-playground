import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {environment} from '@env/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/take';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router) {

		console.log('Cordova => ', environment.cordova);

		Observable.of(navigator.userAgent)
				.do(userAgent => console.log(userAgent))
				.filter(userAgent => !userAgent.match(/(iPhone|iPod|iPad|Android)/))
				.merge(() => Observable.fromEvent(document, 'deviceready'))
				.do(() => console.log('deviceready'))
				.take(1)
				.subscribe(() => this.router.navigateByUrl('/core'));
	}
}
