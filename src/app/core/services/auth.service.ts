import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {registerMutation} from './gql/register.mutation';

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
}
