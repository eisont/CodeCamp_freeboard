// 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
    }
  }
`;

const BoardsEditPage = () => {
  // 기능
  const router = useRouter();
  // 수정하기에서 사용하는 조회기능
  const { data: fetchBoardData } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={true} fetchBoardData={fetchBoardData} />;
};

export default BoardsEditPage;
