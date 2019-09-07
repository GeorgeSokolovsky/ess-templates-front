import gql from 'graphql-tag';

export const validatorsListQuery = gql`
    query {
        validators {
            _id
            rule
            payload
            createdAt
            updatedAt
        }
    }
`;
