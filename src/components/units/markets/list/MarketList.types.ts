// 중고마켓 목록 types

import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IMarketListUIProps {
  data?: Pick<IQuery, "fetchUseditems">;
  onClickMoveToMarketNew: () => void;
  onClickMoveToMarketDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onLoadMore: () => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
