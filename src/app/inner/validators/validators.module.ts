import {NgModule} from '@angular/core';

import {ValidatorsService} from './validators.service';
import {ValidatorsRoutingModule} from './validators-routing.module';
import {ValidatorsListModule} from './list/validators-list.module';

@NgModule({
    imports: [ValidatorsListModule, ValidatorsRoutingModule],
    providers: [ValidatorsService]
})
export class ValidatorsModule {}
