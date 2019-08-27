import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FieldsService} from '../fields.service';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {CreateFieldFormComponent} from './create/create-field-form.component';

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
        this.dialog.open(CreateFieldFormComponent, {
            width: '200px',
            height: '400px'
        });
    }
}
