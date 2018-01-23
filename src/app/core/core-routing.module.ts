import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {SidenavLayoutComponent} from '@app/core/components/sidenav-layout/sidenav-layout.component';
import {HomeComponent} from '@app/core/containers/home/home.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{
		path: '', component: SidenavLayoutComponent,
		children: [
			{path: 'home', component: HomeComponent},
			{path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule'}
		]
	},
	{
		path: 'plain', component: LayoutComponent,
		children: [
			{path: 'home', component: HomeComponent},
			{path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule'}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule {
}
