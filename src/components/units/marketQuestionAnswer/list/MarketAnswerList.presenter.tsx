// 중고마켓 댓글 목록 presenter

import { IMarketCommentListUIProps } from "./MarketAnswerList.types";
import InfiniteScroll from "react-infinite-scroller";
import MarketAnswerListUIItem from "./MarketAnswerList.presenterItem";

export default function MarketAnswerListUI(props: IMarketCommentListUIProps) {
  if (!props.data) return <div />;
  console.log("data", props.data);

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestionAnswers.map((answerel: any) => (
        <MarketAnswerListUIItem
          key={answerel._id}
          answerel={answerel}
          commentID={props.commentID}
        />
      ))}
    </InfiniteScroll>
  );
}
