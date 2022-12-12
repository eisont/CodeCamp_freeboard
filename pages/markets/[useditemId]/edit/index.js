// 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWrite from "../../../../src/components/units/markets/write/MarketWrite.container";

const FETCH_USED_ITEM = gql`
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
      buyer {
        _id
        email
        name
        picture
        userPoint {
          _id
          amount
          createdAt
          updatedAt
          deletedAt
        }
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        email
        name
        picture
        userPoint {
          _id
        }
        createdAt
        updatedAt
        deletedAt
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const MarketEditPage = () => {
  // 기능
  const router = useRouter();
  // 수정하기에서 사용하는 조회기능
  const { data: fetchUseditem } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketWrite isEdit={true} data={fetchUseditem} />;
};

export default MarketEditPage;
