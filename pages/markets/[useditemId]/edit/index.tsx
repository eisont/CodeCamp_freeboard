// 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWrite from "../../../../src/components/units/markets/write/MarketWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function MarketEditPage() {
  // 기능
  const router = useRouter();
  // 수정하기에서 사용하는 조회기능
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <MarketWrite isEdit={true} data={data} />;
}
