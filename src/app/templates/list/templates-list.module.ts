import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatesListComponent} from './templates-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TemplatesListComponent],
    exports: [TemplatesListComponent]
})
export class TemplatesListModule {}
