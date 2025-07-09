// Header Query

import { gql } from '@apollo/client';

// 회원정보 확인
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
export const D_FETCH_USER_LOGGED_IN = async () => {
  return {
    data: {
      fetchUserLoggedIn: {
        _id: 'test',
        email: 'test@test.com',
        name: '홍길동',
        picture: null,
        userPoint: {
          amount: 5000,
        },
      },
    },
  };
};
// 찜하기
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
// 로그아웃
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
