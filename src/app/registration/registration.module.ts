import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registrationRouting.module';

@NgModule({
    imports: [ReactiveFormsModule, RegistrationRoutingModule],
    declarations: [RegistrationComponent]
})
export class RegistrationModule {}
