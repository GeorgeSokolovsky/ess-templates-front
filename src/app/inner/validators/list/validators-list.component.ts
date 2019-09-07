import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ValidatorsService} from '../validators.service';
import {map} from 'rxjs/operators';
import {IValidator, Validators} from '../../../core/models/validator.model';
import {ValidatorFormComponent} from './form/validator-form.component';

const VALIDATOR_FORM_DIALOG_WIDTH = '400px';
const VALIDATOR_FORM_DIALOG_HEIGHT = '300px';

@Component({
    selector: 'ess-validators-list',
    templateUrl: './validators-list.component.html',
    styleUrls: ['./validators-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidatorsListComponent {
    validators$ = this.validatorsService
        .list()
        .pipe(
            map(value =>
                value.data.validators.reduce<Validators>(
                    (res, next) => [...res, next],
                    []
                )
            )
        );

    constructor(
        private readonly validatorsService: ValidatorsService,
        private readonly dialog: MatDialog
    ) {}

    onEditValidator(validator: IValidator) {
        this.dialog.open(ValidatorFormComponent, {
            width: VALIDATOR_FORM_DIALOG_WIDTH,
            height: VALIDATOR_FORM_DIALOG_HEIGHT,
            data: validator
        });
    }

    onCreateValidator() {
        this.dialog.open(ValidatorFormComponent, {
            width: VALIDATOR_FORM_DIALOG_WIDTH,
            height: VALIDATOR_FORM_DIALOG_HEIGHT
        });
    }
}
