// Header Container

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { BasketCountState } from "../../../../commons/store";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USED_ITEMS_COUNT_IPICKED,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "./Header.queries";
import LayoutHeaderUI from "./Header.presenter";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};

export default function LayoutHeader() {
  const router = useRouter();
  const [chargePrice] = useState(100);
  const [basketCount, setBasketCount] = useRecoilState(BasketCountState);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);
  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  // 메인페이지 이동
  const onClickHome = () => {
    router.push("../");
  };
  // 로그인 이동
  const onClickLogin = () => {
    router.push("/login");
  };
  // 로그아웃 기능
  const onClickLogout = async () => {
    try {
      await logoutUser();
      location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };
  // 회원가입 이동
  const onClickSignup = () => {
    router.push("/signup");
  };

  // 장바구니 담기
  useEffect(() => {
    setBasketCount(JSON.parse(localStorage.getItem("baskets") || "[]").length);
  });

  // 포인트 충전
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp48430943
    // IMP.request_pay(param, callback) // 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: chargePrice,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: `${loggedIn?.fetchUserLoggedIn?.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        console.log(rsp);
        // callback
        if (rsp.success) {
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert("충전 완료!");
        } else {
          // 결제 실패 시 로직
          alert(rsp.error_msg);
        }
      }
    );
  };

  return (
    <LayoutHeaderUI
      data={data}
      loggedIn={loggedIn}
      basketCount={basketCount}
      onClickHome={onClickHome}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      onClickSignup={onClickSignup}
      onClickPoint={onClickPoint}
    />
  );
}
