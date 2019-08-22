import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {InnerToolbar} from './inner-toolbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
    declarations: [InnerToolbar],
    exports: [InnerToolbar]
})
export class InnerToolbarModule {}
