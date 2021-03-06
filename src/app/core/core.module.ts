import {NgModule} from '@angular/core';

import {BottomNavLayoutComponent} from '@app/core/components/bottom-nav-layout/bottom-nav-layout.component';
import {DoubleNavLayoutComponent} from '@app/core/components/double-nav-layout/double-nav-layout.component';
import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {SidenavLayoutComponent} from '@app/core/components/sidenav-layout/sidenav-layout.component';
import {HomeComponent} from '@app/core/containers/home/home.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		CoreRoutingModule
	],
	declarations: [HomeComponent, BottomNavLayoutComponent, DoubleNavLayoutComponent, LayoutComponent, SidenavLayoutComponent]
})
export class CoreModule {
}
