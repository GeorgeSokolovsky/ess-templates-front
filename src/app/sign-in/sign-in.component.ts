import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/services/auth.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'ess-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, OnDestroy {
    signInForm: FormGroup;

    passwordHidden = true;

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly authService: AuthService,
        private readonly router: Router
    ) {}

    ngOnInit() {
        this.signInForm = this.fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSignIn() {
        const {login, password} = this.signInForm.value;

        this.authService
            .signIn(login, password)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.router.navigateByUrl('/templates');
            });
    }
}
