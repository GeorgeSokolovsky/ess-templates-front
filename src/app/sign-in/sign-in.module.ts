import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';
import {SignInComponent} from './sign-in.component';
import {SignInRoutingModule} from './sign-in-routing.module';
import {AuthToolbarModule} from '../core/components/auth-toolbar/auth-toolbar.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SignInRoutingModule,
        AuthToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [SignInComponent]
})
export class SignInModule {}
