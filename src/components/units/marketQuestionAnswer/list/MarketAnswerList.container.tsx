// 중고마켓 댓글 목록 container

import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "./MarketAnswerList.queries";
import MarketAnswerListUI from "./MarketAnswerList.presenter";

export default function MarketAnswerList(props: any) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEMS_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.commentel?._id) }, // questions의 데이터를 사용
  });

  const onLoadMore = () => {
    // 데이터가 없으면 리턴
    if (!data) return;
  };
  return (
    <MarketAnswerListUI
      isEditSub={props.isEditSub}
      setIsEditSub={props.setIsEditSub}
      data={data}
      onLoadMore={onLoadMore}
      commentel={props.commentel}
    />
  );
}
