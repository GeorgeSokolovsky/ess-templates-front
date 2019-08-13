import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';
import {confirmPasswordValidator} from './validators/confirm-password.validator';

@Component({
    selector: 'ess-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit, OnDestroy {
    registrationForm: FormGroup;
    passwordHidden = true;
    confirmPasswordHidden = true;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    ngOnInit() {
        this.registrationForm = this.fb.group(
            {
                login: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(4),
                        Validators.maxLength(20)
                    ]
                ],
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
            },
            {
                validators: [confirmPasswordValidator]
            }
        );
    }

    ngOnDestroy() {
        this.destroy$.next();
    }

    onRegister() {
        const {login, password} = this.registrationForm.value;

        this.authService
            .register(login, password)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.router.navigate(['..', 'sign-in']);
            });
    }
}
