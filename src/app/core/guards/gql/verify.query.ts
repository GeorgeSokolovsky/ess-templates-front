import gql from 'graphql-tag';

export const verifyQuery = gql`
    query($token: String!) {
        verify(token: $token) {
            _id
        }
    }
`;
