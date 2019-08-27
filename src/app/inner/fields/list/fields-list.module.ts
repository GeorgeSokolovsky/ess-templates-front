import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldsListComponent} from './fields-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
} from '@angular/material';
import {CreateFieldFormModule} from './create/create-field-form.module';

@NgModule({
    imports: [
        CommonModule,
        InnerToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        CreateFieldFormModule
    ],
    declarations: [FieldsListComponent],
    exports: [FieldsListComponent]
})
export class FieldsListModule {}
