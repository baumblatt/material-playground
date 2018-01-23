import {NgModule} from '@angular/core';

import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {HomeComponent} from '@app/core/containers/home/home.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {SharedModule} from '@shared/shared.module';
import { SidenavLayoutComponent } from './components/sidenav-layout/sidenav-layout.component';

@NgModule({
	imports: [
		SharedModule,
		CoreRoutingModule
	],
	declarations: [HomeComponent, LayoutComponent, SidenavLayoutComponent]
})
export class CoreModule {
}
