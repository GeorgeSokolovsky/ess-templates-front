import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldsListComponent} from './fields-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
} from '@angular/material';
import {FieldFormModule} from './form/field-form.module';
import {CardsListModule} from '../../../core/components/cards-list/cards-list.module';

@NgModule({
    imports: [
        CommonModule,
        InnerToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        FieldFormModule,
        CardsListModule
    ],
    declarations: [FieldsListComponent],
    exports: [FieldsListComponent]
})
export class FieldsListModule {}
