import gql from 'graphql-tag';

export const createFieldMutation = gql`
    mutation($createFieldInput: CreateFieldInput!) {
        createField(createFieldInput: $createFieldInput) {
            _id
        }
    }
`;
