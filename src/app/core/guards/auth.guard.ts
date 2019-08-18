import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {verifyQuery} from './gql/verify.query';
import {TOKEN_KEY} from '../tokens/auth.token';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private readonly apollo: Apollo, private readonly router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | UrlTree {
        return this.canActivateIfAuthorized();
    }

    canActivateChild(): Observable<boolean | UrlTree> | UrlTree {
        return this.canActivateIfAuthorized();
    }

    private canActivateIfAuthorized(): Observable<boolean | UrlTree> | UrlTree {
        const token = localStorage.getItem(TOKEN_KEY);

        if (!token) {
            return this.getRedirectUrlTree();
        }

        return this.apollo
            .watchQuery({
                query: verifyQuery,
                variables: {
                    token
                }
            })
            .valueChanges.pipe(map(id => !!id || this.getRedirectUrlTree()));
    }

    private getRedirectUrlTree(): UrlTree {
        return this.router.parseUrl('/sign-in');
    }
}
