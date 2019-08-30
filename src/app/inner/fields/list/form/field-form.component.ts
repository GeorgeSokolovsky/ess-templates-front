import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnDestroy,
    OnInit
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FieldsService} from '../../fields.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {IField} from '../../../../core/models/field.model';

@Component({
    selector: 'ess-field-form',
    templateUrl: './field-form.component.html',
    styleUrls: ['./field-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldFormComponent implements OnInit, OnDestroy {
    fieldForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required]
    });

    private readonly destroy$ = new Subject<void>();

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: IField | null,
        private readonly fb: FormBuilder,
        private readonly fieldsService: FieldsService,
        private readonly dialogRef: MatDialogRef<FieldFormComponent>
    ) {}

    get updateMode(): boolean {
        return !!this.data;
    }

    ngOnInit() {
        if (this.data) {
            this.fieldForm.patchValue(this.data);
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSubmit() {
        const {value: payload} = this.fieldForm;

        const request$ = this.updateMode
            ? this.fieldsService.update(this.data._id, payload)
            : this.fieldsService.create(payload);

        request$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.dialogRef.close();
        });
    }
}
