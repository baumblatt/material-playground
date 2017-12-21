import {NgModule} from '@angular/core';

import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {CoreRoutingModule} from '@app/core/core-routing.module';
import {HomeComponent} from '@app/core/pages/home/home.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		CoreRoutingModule
	],
	declarations: [HomeComponent, LayoutComponent]
})
export class CoreModule {
}
