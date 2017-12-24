import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule],
	exports: [MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialModule {
}
