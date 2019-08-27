import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {Fields} from '../../core/models/field.model';
import {fieldsListQuery} from './list/gql/fields-list.query';
import {createFieldMutation} from './list/create/gql/create-field.mutation';
import {ID} from '../../core/models/id.model';
import {ICreateFieldInput} from './models/create-field-input.interface';

@Injectable()
export class FieldsService {
    constructor(private readonly apollo: Apollo) {}

    list(): Observable<ApolloQueryResult<{fields: Fields}>> {
        return this.apollo.watchQuery<{fields: Fields}>({query: fieldsListQuery})
            .valueChanges;
    }

    create(createFieldInput: ICreateFieldInput): Observable<{_id: ID}> {
        return this.apollo.mutate({
            mutation: createFieldMutation,
            variables: {
                createFieldInput
            },
            refetchQueries: [
                {
                    query: fieldsListQuery
                }
            ]
        });
    }
}
