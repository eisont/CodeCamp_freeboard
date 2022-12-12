// 중고마켓 댓글 목록 types

import {
  IUseditemQuestion,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IMarketCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  onLoadMore: () => void;
  isEdit: boolean;
}

export interface IMarketCommentListUIItemProps {
  el: IUseditemQuestion;
  key: string;
}
