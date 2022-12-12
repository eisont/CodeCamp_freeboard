// login Container

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { LOGIN_USER } from "./login.queries";
import LoginUI from "./login.presenter";
import { AccessTokenState } from "../../../commons/store";

const schema = yup.object({
  email: yup.string().required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

const LoginContainer = () => {
  const router = useRouter();
  const isLogin = router.asPath === `/login`;
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(AccessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignup = () => {
    router.push("/signup");
  };

  const onClickHome = () => {
    router.push("/boards");
  };

  const onClickLogin = async (data: any) => {
    try {
      // 1. 로그인하기
      const result = await loginUser({
        variables: {
          email: data?.email,
          password: data?.password,
        },
      });
      // accessToken 생성
      const accessToken = result.data.loginUser.accessToken;
      // AccessToken 에 담기
      setAccessToken(accessToken);
      router.push("/boards");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <LoginUI
      isLogin={isLogin}
      onClickHome={onClickHome}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignup={onClickSignup}
      onClickLogin={onClickLogin}
    />
  );
};

export default LoginContainer;
