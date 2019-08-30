import gql from 'graphql-tag';

export const updateFieldMutation = gql`
    mutation($id: ID!, $updateFieldInput: UpdateFieldInput!) {
        updateField(id: $id, updateFieldInput: $updateFieldInput) {
            _id
        }
    }
`;
