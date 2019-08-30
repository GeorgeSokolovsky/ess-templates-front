import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FieldsService} from '../fields.service';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {FieldFormComponent} from './form/field-form.component';
import {IField} from '../../../core/models/field.model';

const FIELD_FORM_DIALOG_WIDTH = '400px';
const FIELD_FORM_DIALOG_HEIGHT = '300px';

@Component({
    selector: 'ess-fields-list',
    templateUrl: './fields-list.component.html',
    styleUrls: ['./fields-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldsListComponent implements OnInit {
    fields$ = this.fieldsService.list().pipe(map(({data}) => data.fields));

    constructor(
        private readonly fieldsService: FieldsService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit() {}

    onCreateField() {
        this.dialog.open(FieldFormComponent, {
            width: FIELD_FORM_DIALOG_WIDTH,
            height: FIELD_FORM_DIALOG_HEIGHT
        });
    }

    onEditField(field: IField) {
        this.dialog.open(FieldFormComponent, {
            width: FIELD_FORM_DIALOG_WIDTH,
            height: FIELD_FORM_DIALOG_HEIGHT,
            data: field
        });
    }
}
