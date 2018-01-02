import {Component} from '@angular/core';
import {environment} from '@env/environment';

@Component({
	selector: 'app-sidenav-layout',
	templateUrl: './sidenav-layout.component.html',
	styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent {
	/**
	 * Whether the sidenav is fixed in the viewport.
	 * @see environment.sidenav.fixedInViewport.
	 */
	fixedInViewport = environment.sidenav.fixedInViewport;
}
