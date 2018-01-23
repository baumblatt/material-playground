import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BottomNavLayoutComponent} from '@app/core/components/bottom-nav-layout/bottom-nav-layout.component';
import {DoubleNavLayoutComponent} from '@app/core/components/double-nav-layout/double-nav-layout.component';
import {LayoutComponent} from '@app/core/components/layout/layout.component';
import {SidenavLayoutComponent} from '@app/core/components/sidenav-layout/sidenav-layout.component';

import {HomeComponent} from '@app/core/containers/home/home.component';

const routes: Routes = [
	{
		path: '', component: DoubleNavLayoutComponent,
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'home'},
			{path: 'home', component: HomeComponent},
			{path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule'}
		]
	},
	{
		path: 'side', component: SidenavLayoutComponent,
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'home'},
			{path: 'home', component: HomeComponent},
			{path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule'}
		]
	},
	{
		path: 'bottom', component: BottomNavLayoutComponent,
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'home'},
			{path: 'home', component: HomeComponent},
			{path: 'sample', loadChildren: 'app/sample/sample.module#SampleModule'}
		]
	},
	{
		path: 'plain', component: LayoutComponent,
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'home'},
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
