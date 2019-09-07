import gql from 'graphql-tag';

export const updateValidatorMutation = gql`
    mutation($updateValidatorInput: UpdateValidatorInput) {
        updateValidator(updateValidatorInput: $updateValidatorInput) {
            _id
        }
    }
`;
