import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirstComponent} from '@sample/containers/first/first.component';
import {SecondComponent} from '@sample/containers/second/second.component';

const routes: Routes = [
	{
		path: 'first', component: FirstComponent
	}, {
		path: 'second', component: SecondComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SampleRoutingModule {
}
