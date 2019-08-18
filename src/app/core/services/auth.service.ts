import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {registerMutation} from './gql/register.mutation';
import {signInMutation} from './gql/sign-in.mutation';
import {map, tap} from 'rxjs/operators';
import {TOKEN_KEY} from '../tokens/auth.token';

function updateToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private readonly apollo: Apollo) {}

    register(login: string, password: string): Observable<string> {
        return this.apollo.mutate({
            mutation: registerMutation,
            variables: {
                registerUserInput: {
                    login,
                    password
                }
            }
        });
    }

    signIn(login: string, password: string): Observable<string> {
        return this.apollo
            .mutate({
                mutation: signInMutation,
                variables: {
                    signInUserInput: {
                        login,
                        password
                    }
                }
            })
            .pipe(
                map(({data: {signIn}}) => signIn),
                tap(updateToken)
            );
    }

    signOut() {
        removeToken();

        this.apollo.getClient().resetStore();
    }
}
