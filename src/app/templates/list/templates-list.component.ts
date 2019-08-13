import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TemplatesService} from '../templates.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'ess-templates-list',
    templateUrl: './templates-list.component.html',
    styleUrls: ['./templates-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplatesListComponent implements OnInit {
    templates$ = this.templatesService
        .list()
        .pipe(map(value => value.data.reduce((res, next) => [...res, next], [])));

    constructor(private readonly templatesService: TemplatesService) {}

    ngOnInit() {}
}
