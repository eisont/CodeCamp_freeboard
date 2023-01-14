import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../../path/to/types/generated/types";

// ================================================================
export interface IPropsPre {
  keyword?: String;
  setKeyword: Dispatch<SetStateAction<string>>;
  startDate: String;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: String;
  setEndDate: Dispatch<SetStateAction<string>>;

  BoardsOfTheBestDate: IQuery | undefined;
  BoardsDate: Pick<IQuery, "fetchBoards"> | undefined;
  BoardsCountDate: Pick<IQuery, "fetchBoardsCount"> | undefined;
  refetchBoards: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onClickMoveToBoardNew: () => void;
}
// ================================================================

export interface IPropsStyle {
  isMatched: boolean;
}
// ================================================================

export interface IPropsBestBoards {
  el: IBoard;
}
// ================================================================

export interface IPropsPreItem {
  el: IBoard;
  index: number;
  keyword?: String | undefined | RegExp;
}
