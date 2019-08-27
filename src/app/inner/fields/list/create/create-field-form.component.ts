import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {FieldsService} from '../../fields.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    selector: 'ess-create-field-form',
    templateUrl: './create-field-form.component.html',
    styleUrls: ['./create-field-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFieldFormComponent implements OnInit, OnDestroy {
    fieldForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required]
    });

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly fb: FormBuilder,
        private readonly fieldsService: FieldsService,
        private readonly dialogRef: MatDialogRef<CreateFieldFormComponent>
    ) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSubmit() {
        this.fieldsService
            .create(this.fieldForm.value)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.dialogRef.close();
            });
    }
}
