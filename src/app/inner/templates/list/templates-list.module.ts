import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplatesListComponent} from './templates-list.component';
import {InnerToolbarModule} from '../../../core/components/inner-toolbar/inner-toolbar.module';

@NgModule({
    imports: [CommonModule, InnerToolbarModule],
    declarations: [TemplatesListComponent],
    exports: [TemplatesListComponent]
})
export class TemplatesListModule {}
