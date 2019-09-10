import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ParticipantsListComponent} from './participants-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';
import {CardsListModule} from '../../../core/components/cards-list/cards-list.module';
import {SerializeModule} from '../../../core/pipes/serialize/serialize.module';

@NgModule({
    imports: [
        CommonModule,
        InnerToolbarModule,
        CardsListModule,
        SerializeModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [ParticipantsListComponent],
    exports: [ParticipantsListComponent]
})
export class ParticipantsListModule {}
