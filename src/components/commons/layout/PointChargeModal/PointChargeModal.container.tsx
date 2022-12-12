import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import PointChargeModalUI from "./PointChargeModal.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./PointChargeModal.query";

// IMP 타입을 이렇게 지정해줍니다.
declare const window: typeof globalThis & {
  IMP: any;
};

const PointChargeModal = (props: any) => {
  const [chargePrice, setChargePrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { data: loggedInUser } = useQuery(FETCH_USER_LOGGED_IN);

  const PointSelectObject = [
    {
      id: "0",
      Point: "포인트 선택",
    },
    {
      id: "100",
      Point: 100,
    },
    {
      id: "500",
      Point: 500,
    },
    {
      id: "2000",
      Point: 2000,
    },
    {
      id: "5000",
      Point: 5000,
    },
  ];

  const onChangePoint = (event: any) => {
    setChargePrice(Number(event.target.id));
  };

  const onClickOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickClose = () => {
    props.setIsChargeModal(false);
  };

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  // 포인트 충전
  const onClickPoint = () => {
    props.setIsChargeModal(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp48430943
    // IMP.request_pay(param, callback) // 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: chargePrice,
        buyer_email: loggedInUser?.fetchUserLoggedIn?.email,
        buyer_name: loggedInUser?.fetchUserLoggedIn?.name,
        buyer_tel: "010-1234-5678",
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
    <PointChargeModalUI
      chargePrice={chargePrice}
      isOpen={isOpen}
      PointSelectObject={PointSelectObject}
      onChangePoint={onChangePoint}
      onClickOpen={onClickOpen}
      onClickClose={onClickClose}
      onClickPoint={onClickPoint}
    />
  );
};

export default PointChargeModal;
