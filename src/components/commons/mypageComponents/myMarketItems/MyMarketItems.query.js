import { gql } from "@apollo/client";

// 나의 상품
export const FETCHUSED_ITEMS_ISOLD = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      contents
      price
      buyer {
        name
      }
      createdAt
    }
  }
`;
// 나의 상품 Count
export const FETCH_USED_ITEMS_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

// 마이찜
export const FETCHUSED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      contents
      price
      buyer {
        _id
      }
      seller {
        name
      }
      createdAt
    }
  }
`;

// 마이찜 Count
export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
