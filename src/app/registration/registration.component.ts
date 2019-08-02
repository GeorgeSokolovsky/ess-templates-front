import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AuthService} from '../core/services/auth.service';

@Component({
    selector: 'ess-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit, OnDestroy {
    registrationForm: FormGroup;

    private readonly destroy$ = new Subject<void>();

    constructor(private readonly fb: FormBuilder, private authService: AuthService) {}

    ngOnInit() {
        this.registrationForm = this.fb.group({
            login: [''],
            password: ['']
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
    }

    onRegister() {
        const {login, password} = this.registrationForm.value;

        this.authService
            .register(login, password)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}
