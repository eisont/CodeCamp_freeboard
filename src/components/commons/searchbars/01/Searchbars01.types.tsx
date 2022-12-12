import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchbars01Props {
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchUseditemsIBoughtArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditemsIBought">>>;
  onChangeKeyword: (value: string) => void;
}
export interface ISearchbars01UIProps {
  onChangeSearchbar(event: ChangeEvent<HTMLInputElement>): void;
}
