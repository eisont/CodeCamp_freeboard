// 중고마켓 댓글 목록 presenter
import { IMarketCommentListUIProps } from "./MarketCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { v4 as uuidv4 } from "uuid";

export default function MarketCommentListUI(props: IMarketCommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.map((commentel: any) => (
        <MarketCommentListUIItem key={uuidv4()} commentel={commentel} />
      ))}
    </InfiniteScroll>
  );
}
