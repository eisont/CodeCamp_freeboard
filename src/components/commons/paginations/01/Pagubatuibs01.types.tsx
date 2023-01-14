import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../path/to/types/generated/types";

export interface IPropsCon {
  BoardsCountDate: Pick<IQuery, "fetchBoardsCount"> | undefined;
  refetchBoards: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

// ==================================================================
export interface IPropsPre {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
