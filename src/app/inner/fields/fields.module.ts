import {NgModule} from '@angular/core';
import {FieldsRoutingModule} from './fields-routing.module';
import {FieldsListModule} from './list/fields-list.module';
import {FieldsService} from './fields.service';

@NgModule({
    imports: [FieldsListModule, FieldsRoutingModule],
    providers: [FieldsService]
})
export class FieldsModule {}
