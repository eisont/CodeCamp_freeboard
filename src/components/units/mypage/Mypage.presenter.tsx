import Script from "next/script";
import * as S from "./Mypage.styles";

export default function MypageUIpage(props: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.MenuList>
          <S.MyPlofile>마이 페이지</S.MyPlofile>
          <S.Menu onClick={props.onClickPickBought}>내가 찜한 목록</S.Menu>
          <S.Menu onClick={props.onClickPickList}>내가 구입한 목록</S.Menu>
          <S.Menu onClick={props.onClickPickSold}>내가 판매한 목록</S.Menu>
          <S.Menu onClick={props.onClickPoint}>포인트 충전</S.Menu>
        </S.MenuList>
        <S.ListPage></S.ListPage>
      </S.Wrapper>
    </>
  );
}
