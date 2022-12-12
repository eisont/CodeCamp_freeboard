// Signup Container

import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { useRouter } from "next/router";
import { CREATE_USER } from "./signup.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import SignupUI from "./signup.presenter";
import { Modal } from "../../../commons/store";
import { useRecoilState } from "recoil";

interface IFormValues {
  email?: string;
  password?: string;
  passwordCh?: string;
  name?: string;
}

const schema = yup.object({
  email: yup.string().required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  name: yup.string().required("이름은 필수 입력사항입니다."),
});

const SignupContainer = () => {
  const router = useRouter();
  const [, setModal] = useRecoilState(Modal);

  const isSignUp = router.asPath === `/signup`;

  const [erremail, setErremail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCreateUser = async (data: IFormValues) => {
    try {
      if (data?.password === data?.passwordCh) {
        // 1. 가입하기
        await createUser({
          variables: {
            createUserInput: {
              email: data?.email,
              password: data?.password,
              name: data?.name,
            },
          },
        });
        setModal(true);
        router.push("/login");
      } else {
        setErrPassword("비밀번호가 일치하지 않습니다.");
      }
    } catch (errors: any) {
      setErremail(errors.message);
      console.log("error", errors?.message);
    }
  };

  const onClickLogin = () => {
    router.push("/login");
  };
  return (
    <SignupUI
      erremail={erremail}
      errPassword={errPassword}
      isSignUp={isSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUser={onClickCreateUser}
      onClickLogin={onClickLogin}
    />
  );
};

export default SignupContainer;
