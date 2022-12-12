// Header Presenter

import * as S from "./Header.styles";
import Script from "next/script";
import { PointComma } from "../../../../commons/libraries/point";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";
import {
  ImageChange,
  Logoutsvg,
  PointPigsvg,
  ProfileArrow,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";

const LayoutHeaderUI = (props: any) => {
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
          <div onClick={props.onClickHome} style={{ cursor: "pointer" }}>
            <CodeCampLogosvg width="236" height="36" fill="#000" />
          </div>

          {props.loggedIn?._id ? (
            <S.UserInfoBox>
              <S.FlexBox onClick={props.onClickModal}>
                {props.loggedIn?.picture === null ? (
                  <Profilesvg
                    margin="0 28px 0 0"
                    width="48"
                    height="48"
                    fill="#c4c4c4"
                  />
                ) : (
                  <S.Picture src={props.loggedIn?.picture} />
                )}
                <ProfileArrow width="12" height="9" fill="#000" />
              </S.FlexBox>

              {props.isModal && (
                <>
                  <S.ModalabsoluteBox isModal={props.isModal}>
                    <ProfileArrow
                      ratate="rotate(180deg)"
                      width="16"
                      height="12"
                      fill="#fff"
                    />
                  </S.ModalabsoluteBox>

                  <S.ModalBox isModal={props.isModal}>
                    <S.UserInfo>
                      {props.loggedIn?.picture === null ? (
                        <div style={{ position: "relative" }}>
                          <Profilesvg width="48" height="48" fill="#c4c4c4" />
                          <S.SettingabsoluteBox
                            onClick={props.onClickChangeImage}
                          >
                            <ImageChange
                              width="16"
                              height="16"
                              CilcleFill="#000"
                              SettingFill="#fff"
                            />
                          </S.SettingabsoluteBox>
                        </div>
                      ) : (
                        <S.Picture src={props.loggedIn?.picture} />
                      )}
                      <S.User>
                        <S.UserName>{props.loggedIn?.name}</S.UserName>
                        <S.UserPoint>
                          {PointComma(props.loggedIn?.userPoint?.amount)} P
                        </S.UserPoint>
                      </S.User>
                    </S.UserInfo>
                    <S.Hr Bg="#000" />
                    <S.MenuBox onClick={props.onClickCharge}>
                      <PointPigsvg
                        margin="0 14px 0 0"
                        width="20"
                        height="19"
                        fill="#bdbdbd"
                      />
                      충전하기
                    </S.MenuBox>

                    <S.Hr Bg="#efefef" />

                    <S.MenuBox onClick={props.onClickLogout}>
                      <Logoutsvg
                        margin="0 15px 0 0"
                        width="18"
                        height="18"
                        fill="#bdbdbd"
                      />
                      로그아웃
                    </S.MenuBox>
                  </S.ModalBox>
                </>
              )}
            </S.UserInfoBox>
          ) : (
            <S.FlexBox2>
              <S.LoginBt onClick={props.onClickLogin}>로그인</S.LoginBt>
              <S.SignupBt onClick={props.onClickSignup}>회원가입</S.SignupBt>
            </S.FlexBox2>
          )}
        </S.CenterBox>
      </S.Wrapper>
    </>
  );
};

export default LayoutHeaderUI;
