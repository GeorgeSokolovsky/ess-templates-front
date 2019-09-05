import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TOKEN_KEY} from '../../tokens/auth.token';
import {Router} from '@angular/router';

@Component({
    selector: 'ess-inner-toolbar',
    templateUrl: './inner-toolbar.component.html',
    styleUrls: ['./inner-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerToolbar {
    constructor(private readonly router: Router) {}

    onSignOut() {
        localStorage.removeItem(TOKEN_KEY);

        this.router.navigateByUrl('/sign-in');
    }
}
