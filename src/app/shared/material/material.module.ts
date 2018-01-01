import {NgModule} from '@angular/core';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
	imports: [MatIconModule, MatToolbarModule],
	exports: [MatIconModule, MatToolbarModule]
})
export class MaterialModule {
}
