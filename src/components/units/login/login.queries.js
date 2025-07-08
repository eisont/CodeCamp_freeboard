// login Queries

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const MONK_LOGIN_USER = async ({ variables }) => {
  const { email, password } = variables;

  if (email === 'test@test.com' && password === '1234') {
    return {
      data: {
        loginUser: {
          accessToken: 'mock-access-token-1234',
        },
      },
    };
  } else {
    throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
  }
};
