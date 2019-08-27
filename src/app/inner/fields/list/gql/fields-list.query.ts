import gql from 'graphql-tag';

export const fieldsListQuery = gql`
    query {
        fields {
            _id
            name
            type
        }
    }
`;
