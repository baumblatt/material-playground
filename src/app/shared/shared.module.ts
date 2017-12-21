import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MaterialModule} from '@app/material/material.module';

@NgModule({
	imports: [CommonModule, MaterialModule],
	exports: [CommonModule, MaterialModule]
})
export class SharedModule {
}
