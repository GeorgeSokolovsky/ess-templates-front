import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
    OnInit
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ValidatorsService} from '../../validators.service';
import {IValidator} from '../../../../core/models/validator.model';

@Component({
    selector: 'ess-validator-form',
    templateUrl: './validator-form.component.html',
    styleUrls: ['./validator-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidatorFormComponent implements OnInit, OnDestroy {
    validatorForm = this.fb.group({
        rule: ['', Validators.required],
        payload: ['', Validators.required]
    });

    private readonly destroy$ = new Subject<void>();

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: IValidator | null,
        private readonly fb: FormBuilder,
        private readonly validatorsService: ValidatorsService,
        private readonly dialogRef: MatDialogRef<ValidatorFormComponent>
    ) {}

    get updateMode(): boolean {
        return !!this.data;
    }

    ngOnInit() {
        if (this.data) {
            this.validatorForm.patchValue(this.data);
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSubmit() {
        const {value: payload} = this.validatorForm;

        const request$ = this.updateMode
            ? this.validatorsService.update(this.data._id, payload)
            : this.validatorsService.create(payload);

        request$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.dialogRef.close();
        });
    }
}
