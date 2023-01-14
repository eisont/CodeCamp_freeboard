// boards 목록 Container

import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.query";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../path/to/types/generated/types";

const BoardList = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data: BoardsOfTheBestDate } = useQuery<
    IQuery,
    "fetchBoardsOfTheBest"
  >(FETCH_BOARDS_OF_THE_BEST);

  const { data: BoardsDate, refetch: refetchBoards } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      search: keyword,
    },
  });

  const { data: BoardsCountDate, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, {
    variables: {
      search: keyword,
    },
  });

  const onClickMoveToBoardNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      keyword={keyword}
      setKeyword={setKeyword}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      BoardsOfTheBestDate={BoardsOfTheBestDate}
      BoardsDate={BoardsDate}
      BoardsCountDate={BoardsCountDate}
      refetchBoards={refetchBoards}
      refetchBoardsCount={refetchBoardsCount}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
};

export default BoardList;
