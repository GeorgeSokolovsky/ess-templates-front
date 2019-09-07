import gql from 'graphql-tag';

export const createValidatorMutation = gql`
    mutation($createValidatorInput: CreateValidatorInput) {
        createValidator(createValidatorInput: $createValidatorInput) {
            _id
        }
    }
`;
