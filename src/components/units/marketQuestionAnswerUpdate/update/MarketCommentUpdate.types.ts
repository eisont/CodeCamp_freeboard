// 중고마켓 댓글 등록 types
import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketCommentWriteUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onChangeContents: (event: any) => void;
  onClickWrite: () => void;

  contents?: any;
}
