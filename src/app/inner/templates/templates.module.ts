import {NgModule} from '@angular/core';

import {TemplatesRoutingModule} from './templates-routing.module';
import {TemplatesListModule} from './list/templates-list.module';
import {TemplatesService} from './templates.service';

@NgModule({
    imports: [TemplatesListModule, TemplatesRoutingModule],
    providers: [TemplatesService]
})
export class TemplatesModule {}
