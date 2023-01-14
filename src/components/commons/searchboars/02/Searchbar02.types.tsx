import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../path/to/types/generated/types";

export interface IPropsCon {
  refetchBoards: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  setKeyword: Dispatch<SetStateAction<string>>;

  startDate: String;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: String;
  setEndDate: Dispatch<SetStateAction<string>>;
}

export interface ISearchbars02UIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSearch: (data: any) => void;
  onChangeStartDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEndDate: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchType {
  mysearch: String;
}
