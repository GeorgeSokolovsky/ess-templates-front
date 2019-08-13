import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './registration.component';
import {RegistrationRoutingModule} from './registration-routing.module';
import {AuthToolbarModule} from '../core/components/auth-toolbar/auth-toolbar.module';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [
        ReactiveFormsModule,
        RegistrationRoutingModule,
        AuthToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [RegistrationComponent]
})
export class RegistrationModule {}
