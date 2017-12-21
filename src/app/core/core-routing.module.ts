import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '@app/core/pages/home/home.component';
import {MaterialModule} from '@app/material/material.module';

const routes: Routes = [
	{path: '', component: HomeComponent}
];

@NgModule({
	imports: [MaterialModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [HomeComponent]
})
export class CoreRoutingModule {
}
