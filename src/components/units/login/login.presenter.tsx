// login Presenter

import { BackArrow, CheckIconsvg } from "../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../commons/styles/Imgsvg";
import * as S from "./login.styles";

export const LoginUI = (props: any) => {
  return (
    <S.Wrapper>
      <S.BackBt onClick={props.onClickHome}>
        <BackArrow width="24" height="23" fill="#fff" />
      </S.BackBt>
      <S.Contents>
        <CodeCampLogosvg
          margin="0 0 80px 0"
          width="288"
          height="44"
          fill="#fff"
        />

        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Section>
            <S.InputBox>
              <S.Input
                type="email"
                {...props.register("email")}
                placeholder="아이디를 입력하세요."
              />
              <S.Errors>{props.formState?.errors?.email?.message}</S.Errors>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                type="password"
                {...props.register("password")}
                placeholder="비밀번호를 입력하세요."
              />
              <S.Errors>{props.formState?.errors?.password?.message}</S.Errors>
            </S.InputBox>
            <S.LoginStay>
              <CheckIconsvg
                margin="0 16px 0 0"
                width="20"
                height="20"
                fill="#fff"
              />
              로그인 상태 유지
            </S.LoginStay>
          </S.Section>

          <S.Button>로그인하기</S.Button>
        </form>

        <S.Hr />

        <S.SignupBox>
          <S.PageBt>아이디 찾기</S.PageBt>
          <S.Cross>|</S.Cross>
          <S.PageBt>비밀번호 찾기</S.PageBt>
          <S.Cross>|</S.Cross>
          <S.PageBt onClick={props.onClickSignup}>회원가입</S.PageBt>
        </S.SignupBox>
      </S.Contents>
    </S.Wrapper>
  );
};

export default LoginUI;
