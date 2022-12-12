// 게시판 댓글 목록 types

import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface IBoardCommentListUIItemProps {
  el: IBoardComment;
}
