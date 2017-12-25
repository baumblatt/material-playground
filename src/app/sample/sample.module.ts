import {NgModule} from '@angular/core';
import {FirstComponent} from '@sample/pages/first/first.component';
import {SecondComponent} from '@sample/pages/second/second.component';

import {SampleRoutingModule} from '@sample/sample-routing.module';

import {SharedModule} from '@shared/shared.module';

@NgModule({
	imports: [
		SampleRoutingModule,
		SharedModule
	],
	declarations: [FirstComponent, SecondComponent]
})
export class SampleModule {
}
