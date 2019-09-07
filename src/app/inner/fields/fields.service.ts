import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {Fields, IField} from '../../core/models/field.model';
import {fieldsListQuery} from './list/gql/fields-list.query';
import {createFieldMutation} from './list/form/gql/create-field.mutation';
import {ID} from '../../core/models/id.model';
import {ICreateFieldInput} from './dto/create-field-input.interface';
import {IUpdateFieldInput} from './dto/update-field-input.interface';
import {updateFieldMutation} from './list/form/gql/update-field.mutation';

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

    update(id: ID, updateFieldInput: IUpdateFieldInput): Observable<{_id: ID}> {
        return this.apollo.mutate({
            mutation: updateFieldMutation,
            variables: {
                id,
                updateFieldInput
            },
            refetchQueries: [
                {
                    query: fieldsListQuery
                }
            ]
        });
    }
}
