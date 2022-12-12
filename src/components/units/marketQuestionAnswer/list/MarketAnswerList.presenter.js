// 중고마켓 댓글 목록 presenter

import InfiniteScroll from "react-infinite-scroller";
import MarketAnswerListUIItem from "./MarketAnswerList.presenterItem";

const MarketAnswerListUI = (pr) => {
  if (!pr.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={pr.onLoadMore} hasMore={true}>
      {pr.data?.fetchUseditemQuestionAnswers.map((answerel) => (
        <MarketAnswerListUIItem
          key={answerel._id}
          answerel={answerel}
          commentID={pr.commentID}
        />
      ))}
    </InfiniteScroll>
  );
};

export default MarketAnswerListUI;
