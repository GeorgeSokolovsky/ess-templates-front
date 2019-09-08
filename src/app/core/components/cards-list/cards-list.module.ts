import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {CardsListComponent} from './cards-list.component';

@NgModule({
    imports: [CommonModule, MatCardModule, MatButtonModule],
    declarations: [CardsListComponent],
    exports: [CardsListComponent]
})
export class CardsListModule {}
