// Signup Presenter

import { Closesvg } from "../../../commons/styles/Iconsvg";
import Modal1 from "../../commons/layout/loginmodal";
import * as S from "./signup.styles";

const SignupUI = (props: any) => {
  return (
    <S.Wrapper>
      <Modal1 Title="회원가입을 축하합니다!" />
      <S.BackBt onClick={props.onClickLogin}>
        <Closesvg width="22" height="22" fill="#fff" />
      </S.BackBt>
      <S.Contents>
        <S.Title>회원가입</S.Title>
        <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
          <S.Section>
            <S.InputTitle>이메일</S.InputTitle>
            <S.InputBox>
              <S.Input
                type="email"
                placeholder="이메일을 입력하세요."
                {...props.register("email")}
              />
              <S.Errors>{props.formState?.errors?.email?.message}</S.Errors>
            </S.InputBox>
            <S.InputTitle>이름</S.InputTitle>
            <S.InputBox>
              <S.Input
                type="name"
                placeholder="이름을 입력하세요."
                {...props.register("name")}
              />
              <S.Errors>{props.formState?.errors?.name?.message}</S.Errors>
            </S.InputBox>
            <S.InputTitle>비밀번호</S.InputTitle>
            <S.InputBox>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...props.register("password")}
              />
              <S.Errors>{props.formState?.errors?.password?.message}</S.Errors>
            </S.InputBox>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.InputBox>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력하세요."
                {...props.register("passwordCh")}
              />
              <S.Errors>{props.formState?.errors?.password?.message}</S.Errors>
            </S.InputBox>
          </S.Section>

          <S.Button type="submit" isSignup={props.isSignUp}>
            회원가입하기
          </S.Button>
        </form>
      </S.Contents>
    </S.Wrapper>
  );
};

export default SignupUI;
