import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {ApolloClientOptions} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {TOKEN_KEY} from './core/tokens/auth.token';

const uri = environment.graphQLURI;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const authLink = new ApolloLink((operation, forward) => {
        const token = localStorage.getItem(TOKEN_KEY);

        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ''
            }
        });

        return forward(operation);
    });

    return {
        link: authLink.concat(httpLink.create({uri})),
        cache: new InMemoryCache()
    };
}

@NgModule({
    exports: [ApolloModule, HttpLinkModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink]
        }
    ]
})
export class GraphQLModule {}
