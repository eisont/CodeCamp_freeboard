// 상세보기

// 상세보기 컨테이너
import MarketDetail from '../../../src/components/units/markets/detail/MarketDetail.container';
// 댓글 입력창 컨테이너
import MarketCommetnWrite from '../../../src/components/units/marketComment/write/MarketCommentWrite.container';
// 댓글 리스트 컨테이너
import MarketCommentList from '../../../src/components/units/marketComment/list/MarketCommentList.container';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 0 0 82px 0;
`;

const MarketDetailPage = () => {
  return (
    <Wrapper>
      <MarketDetail />
      <MarketCommetnWrite />
      <MarketCommentList />
    </Wrapper>
  );
};

export default MarketDetailPage;
