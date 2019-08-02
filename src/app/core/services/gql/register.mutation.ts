import gql from 'graphql-tag';

export const registerMutation = gql`
    mutation($registerUserInput: RegisterUserInput!) {
        registerUser(registerUserInput: $registerUserInput) {
            login
        }
    }
`;
