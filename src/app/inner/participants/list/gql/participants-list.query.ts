import gql from 'graphql-tag';

export const participantsListQuery = gql`
    query {
        participants {
            _id
            name
            role
            validators {
                _id
                rule
            }
        }
    }
`;
