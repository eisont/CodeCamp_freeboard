// 중고마켓 상세보기 queries

import { gql } from "@apollo/client";

// 등록한 데이터 조회
export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        createdAt
        updatedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

// 상품 삭제
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

// 찜하기
export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

// 결제 Api
export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      price
    }
  }
`;

// 찜하기
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
