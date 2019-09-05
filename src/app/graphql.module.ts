import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {ApolloClientOptions} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';
import {TOKEN_KEY} from './core/tokens/auth.token';
import {MatSnackBar} from '@angular/material';

const uri = environment.graphQLURI;

export function createApollo(
    httpLink: HttpLink,
    snackBar: MatSnackBar
): ApolloClientOptions<any> {
    const authLink = new ApolloLink((operation, forward) => {
        const token = localStorage.getItem(TOKEN_KEY);

        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ''
            }
        });

        return forward(operation);
    });

    const errorLink = onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors) {
            graphQLErrors.map(({message}) => {
                const messageToShow = message.message
                    ? Object.values(message.message[0].constraints).reduce(
                          (result, next) => `${result} ${next}`
                      )
                    : message;

                return snackBar.open(messageToShow, 'Ok', {
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
            });
        }

        if (networkError) {
            snackBar.open(`[Network error]: ${networkError}`);
        }
    });

    return {
        link: ApolloLink.from([authLink, errorLink, httpLink.create({uri})]),
        cache: new InMemoryCache()
    };
}

@NgModule({
    exports: [ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink, MatSnackBar]
        }
    ]
})
export class GraphQLModule {}
