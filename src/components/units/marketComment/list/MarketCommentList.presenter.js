// 중고마켓 댓글 목록 presenter
import InfiniteScroll from "react-infinite-scroller";
import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { v4 as uuidv4 } from "uuid";

const MarketCommentListUI = (pr) => {
  if (!pr.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={pr.onLoadMore} hasMore={true}>
      {pr.data?.map((commentel) => (
        <MarketCommentListUIItem key={uuidv4()} commentel={commentel} />
      ))}
    </InfiniteScroll>
  );
};

export default MarketCommentListUI;
