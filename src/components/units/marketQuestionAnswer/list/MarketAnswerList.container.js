// 중고마켓 댓글 목록 container

import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "./MarketAnswerList.queries";
import MarketAnswerListUI from "./MarketAnswerList.presenter";

const MarketAnswerList = (pr) => {
  const { data } = useQuery(FETCH_USED_ITEMS_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(pr.commentID) }, // questions의 데이터를 사용
  });

  const onLoadMore = () => {
    // 데이터가 없으면 리턴
    if (!data) return <div />;
  };

  return (
    <MarketAnswerListUI
      isEditSub={pr.isEditSub}
      setIsEditSub={pr.setIsEditSub}
      data={data}
      onLoadMore={onLoadMore}
      commentID={pr.commentID}
    />
  );
};

export default MarketAnswerList;
