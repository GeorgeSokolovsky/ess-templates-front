import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
} from '@angular/material';
import {ValidatorsListComponent} from './validators-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';
import {ValidatorFormModule} from './form/validator-form.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ValidatorFormModule,
        InnerToolbarModule
    ],
    declarations: [ValidatorsListComponent],
    exports: [ValidatorsListComponent]
})
export class ValidatorsListModule {}
