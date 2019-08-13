import gql from 'graphql-tag';

export const templatesListQuery = gql`
    query {
        templates {
            _id
            name
            fields {
                name
            }
            participants {
                name
                role
                validators {
                    rule
                    payload
                }
            }
            createdBy {
                firstName
                lastName
            }
            updatedBy {
                firstName
                lastName
            }
        }
    }
`;
