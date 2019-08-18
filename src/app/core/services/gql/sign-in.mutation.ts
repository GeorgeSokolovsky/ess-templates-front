import gql from 'graphql-tag';

export const signInMutation = gql`
    mutation ($signInUserInput: SignInUserInput!) {
        signIn(signInUserInput: $signInUserInput)
    }
`;
