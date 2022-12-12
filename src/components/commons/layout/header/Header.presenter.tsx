// Header Presenter

import * as S from "./Header.styles";
import Script from "next/script";
import { PointComma } from "../../../../commons/libraries/point";
// 로그인 시 유저 정보 컴포넌트
// import LoginUserbar from "../loginuserbar";

export default function LayoutHeaderUI(props: any) {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.CenterBox>
          {/* 로그인 시 유저 정보 컴포넌트 */}
          {/* <LoginUserbar /> */}
          <S.HomeBt onClick={props.onClickHome}></S.HomeBt>
          {props.loggedIn?.fetchUserLoggedIn._id ? (
            <S.RightBox>
              <S.Point>
                <S.Text>
                  {props.loggedIn?.fetchUserLoggedIn?.name} 님의 포인트{" "}
                  <u>
                    {PointComma(
                      props.loggedIn?.fetchUserLoggedIn?.userPoint?.amount
                    )}
                  </u>
                  P
                </S.Text>
              </S.Point>
              <S.MenuBt onClick={props.onClickPoint}>충전</S.MenuBt>
              <S.MenuBasketBt>
                찜
                <S.BasketNum>
                  {props.data?.fetchUseditemsCountIPicked}
                </S.BasketNum>
              </S.MenuBasketBt>
              <S.MenuBasketBt>
                장바구니<S.BasketNum>{props.basketCount}</S.BasketNum>
              </S.MenuBasketBt>
              <S.MenuBt onClick={props.onClickLogout}>로그아웃</S.MenuBt>
            </S.RightBox>
          ) : (
            <S.RightBox>
              <S.MenuBt onClick={props.onClickLogin}>로그인</S.MenuBt>
              <S.MenuBt onClick={props.onClickSignup}>회원가입</S.MenuBt>
            </S.RightBox>
          )}
        </S.CenterBox>
      </S.Wrapper>
    </>
  );
}
