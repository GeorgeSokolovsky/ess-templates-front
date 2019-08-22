import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'ess-inner-toolbar',
    templateUrl: './inner-toolbar.component.html',
    styleUrls: ['./inner-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerToolbar implements OnInit {
    constructor() {}

    ngOnInit() {}
}
