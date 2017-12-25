import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule],
	exports: [MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialModule {
}
