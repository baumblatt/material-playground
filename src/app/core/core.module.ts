import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CoreRoutingModule} from '@app/core/core-routing.module';
import {HomeComponent} from '@app/core/pages/home/home.component';
import {MaterialModule} from '@app/material/material.module';

@NgModule({
	imports: [
		CommonModule,
		CoreRoutingModule,
		MaterialModule
	],
	declarations: [HomeComponent]
})
export class CoreModule {
}
