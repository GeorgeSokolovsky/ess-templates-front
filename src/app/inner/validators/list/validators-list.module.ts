import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule
} from '@angular/material';
import {ValidatorsListComponent} from './validators-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';
import {ValidatorFormModule} from './form/validator-form.module';
import {CardsListModule} from '../../../core/components/cards-list/cards-list.module';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        ValidatorFormModule,
        InnerToolbarModule,
        CardsListModule
    ],
    declarations: [ValidatorsListComponent],
    exports: [ValidatorsListComponent]
})
export class ValidatorsListModule {}
