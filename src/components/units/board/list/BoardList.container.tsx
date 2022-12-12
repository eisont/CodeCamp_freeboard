// 게시판 목록 container

import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { data: BestBoards } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      search: keyword,
    },
  });

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT, {
    variables: {
      // startDate,
      // endDate,
      search: keyword,
    },
  });
  console.log("data", data);

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      BestBoards={BestBoards?.fetchBoardsOfTheBest}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      setKeyword={setKeyword}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
