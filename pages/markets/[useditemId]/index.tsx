// 상세보기

// 상세보기 컨테이너
import MarketDetail from "../../../src/components/units/markets/detail/MarketDetail.container";
// 댓글 입력창 컨테이너
import MarketCommetnWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
// 댓글 리스트 컨테이너
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";

export default function MarketDetailPage() {
  return (
    <div>
      {/* 상세보기 컨테이너와 연결 */}
      <MarketDetail />
      {/* 댓글 입력창과 연결 */}
      <MarketCommetnWrite />
      {/* 댓글 리스트와 연결 */}
      <MarketCommentList />
    </div>
  );
}
