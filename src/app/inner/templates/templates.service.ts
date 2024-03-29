import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {Templates} from '../../core/models/template.model';
import {templatesListQuery} from './list/gql/templates-list.query';
import {ApolloQueryResult} from 'apollo-client';

@Injectable()
export class TemplatesService {
    constructor(private readonly apollo: Apollo) {}

    list(): Observable<ApolloQueryResult<{templates: Templates}>> {
        return this.apollo.query({
            query: templatesListQuery
        });
    }
}
