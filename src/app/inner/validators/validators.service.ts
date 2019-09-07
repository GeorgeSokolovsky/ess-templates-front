import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {Validators} from '../../core/models/validator.model';
import {validatorsListQuery} from './list/gql/validatorsList.query';
import {ID} from '../../core/models/id.model';
import {ICreateValidatorInput} from './dto/create-validator-input.interface';
import {createValidatorMutation} from './list/form/gql/create-validator.mutation';
import {updateValidatorMutation} from './list/form/gql/update-validator.mutation';
import {IUpdateValidatorInput} from './dto/update-validator-input.interface';

@Injectable()
export class ValidatorsService {
    constructor(private readonly apollo: Apollo) {}

    list(): Observable<ApolloQueryResult<{validators: Validators}>> {
        return this.apollo.watchQuery<{validators: Validators}>({
            query: validatorsListQuery
        }).valueChanges;
    }

    create(createValidatorInput: ICreateValidatorInput): Observable<{_id: ID}> {
        return this.apollo.mutate({
            mutation: createValidatorMutation,
            variables: {
                createValidatorInput
            },
            refetchQueries: [
                {
                    query: validatorsListQuery
                }
            ]
        });
    }

    update(id: ID, updateValidatorInput: IUpdateValidatorInput): Observable<{_id: ID}> {
        return this.apollo.mutate({
            mutation: updateValidatorMutation,
            variables: {
                updateValidatorInput: {
                    _id: id,
                    ...updateValidatorInput
                }
            },
            refetchQueries: [
                {
                    query: validatorsListQuery
                }
            ]
        });
    }
}
