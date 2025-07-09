import { gql } from '@apollo/client';

// 회원정보 확인
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
// 더미데이터 회원정보 확인
export const D_FETCH_USER_LOGGED_IN = async () => {
  return {
    data: {
      fetchUserLoggedIn: {
        _id: 'test',
        // email: 'test@test.com',
        name: '홍길동',
        picture: null,
        userPoint: {
          amount: 5000,
        },
      },
    },
  };
};

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
      }
      seller {
        name
        email
      }
      createdAt
    }
  }
`;
export const D_CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = async () => {
  return {
    data: {
      createPointTransactionOfBuyingAndSelling: {
        _id: 'transaction123',
        name: '맥북 프로 16인치',
        remarks: '2025 최신형 모델',
        contents: '거의 새 제품처럼 깨끗합니다. 사용감 적음.',
        price: 3200000,
        tags: ['전자기기', '맥북', '노트북'],
        images: ['https://placehold.co/300x200?text=Image+1', 'https://placehold.co/300x200?text=Image+2'],
        pickedCount: 5,
        useditemAddress: {
          zipcode: '06234',
          address: '서울특별시 강남구 테헤란로 123',
          addressDetail: '3층 301호',
          lat: 37.498095,
          lng: 127.02761,
          createdAt: '2025-07-08T10:23:45.000Z',
        },
        seller: {
          name: '홍길동',
          email: 'test@test.com',
        },
        createdAt: '2025-07-08T10:23:45.000Z',
      },
    },
  };
};

export const FETCHUSED_ITEMS_IBOUGHT = gql`
  query fetchUseditemsIBought($page: Int, $search: String) {
    fetchUseditemsIBought(page: $page, search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
      soldAt
      createdAt
    }
  }
`;
