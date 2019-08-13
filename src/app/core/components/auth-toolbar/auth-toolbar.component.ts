import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'ess-auth-toolbar',
    templateUrl: './auth-toolbar.component.html',
    styleUrls: ['./auth-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthToolbarComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
