import {NgModule} from '@angular/core';

import {BottomNavLayoutComponent} from '@app/core/components/bottom-nav-layout/bottom-nav-layout.component';
import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {HomeComponent} from '@app/core/pages/home/home.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		CoreRoutingModule
	],
	declarations: [HomeComponent, LayoutComponent, BottomNavLayoutComponent]
})
export class CoreModule {
}
