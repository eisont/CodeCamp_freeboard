import { gql } from "@apollo/client";

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
