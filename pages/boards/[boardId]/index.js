// 상세보기

// 상세보기 컨테이너
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
// 댓글 입력창 컨테이너
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
// 댓글 리스트 컨테이너
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";

const BoardDetailPage = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      {/* 상세보기 컨테이너와 연결 */}
      <BoardDetail />
      {/* 댓글 입력창과 연결 */}
      <BoardCommentWrite />
      {/* 댓글 리스트와 연결 */}
      <BoardCommentList />
    </div>
  );
};

export default BoardDetailPage;
