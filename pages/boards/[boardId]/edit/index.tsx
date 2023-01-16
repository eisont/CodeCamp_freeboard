import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../path/to/types/generated/types";
import BoardWrite from "../../../../src/components/units/boards/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetcchBoard($boardId: ID!) {
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

const BoardEditPage = () => {
  const router = useRouter();

  const { data: fetchBoardData } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });

  return <BoardWrite isEdit={true} fetchBoardData={fetchBoardData} />;
};

export default BoardEditPage;
