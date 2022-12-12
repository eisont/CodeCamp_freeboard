// login Presenter

import * as S from "./login.styles";

export const LoginUI = (props: any) => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Header>
          <S.LoginTitle>huni 사이트에 로그인하세요</S.LoginTitle>
        </S.Header>

        <S.InputBx>
          <S.Input
            type="name"
            onChange={props.onChangeEmail}
            placeholder="아이디를 입력하세요."
          />
          <S.Input
            type="password"
            onChange={props.onChangePassword}
            placeholder="비밀번호를 입력하세요."
          />
        </S.InputBx>

        <S.Button onClick={props.onClickCreateUser}>로그인</S.Button>

        <S.SignupBox>
          아직 계정이 없으신가요?
          <S.Signup onClick={props.onClickSignup}>회원가입</S.Signup>
        </S.SignupBox>
      </S.Box>
    </S.Wrapper>
  );
};

export default LoginUI;
