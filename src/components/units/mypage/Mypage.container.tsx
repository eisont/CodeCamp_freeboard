import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../commons/types/generated/types";
import { withAuth } from "../../commons/hocs/withAuth";
import MypageUIpage from "./Mypage.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCHUSED_ITEMS_IBOUGHT,
  FETCHUSED_ITEMS_IPICKED,
  FETCHUSED_ITEMS_ISOLD,
} from "./Mypage.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

function MypagePage() {
  const [chargePrice] = useState(100);
  const router = useRouter();

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data: boughtData } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCHUSED_ITEMS_IBOUGHT);
  console.log(boughtData);

  const { data: pickData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCHUSED_ITEMS_IPICKED);
  console.log(pickData);

  const { data: soldData } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCHUSED_ITEMS_ISOLD);
  console.log(soldData);

  const onClickPickBought = () => {
    alert("이동할 페이지를 못 찾음");
    router.push("");
  };
  const onClickPickList = () => {
    alert("이동할 페이지를 못 찾음");
    router.push("");
  };
  const onClickPickSold = () => {
    alert("이동할 페이지를 못 찾음");
    router.push("");
  };
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp48430943"); // 예: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: chargePrice,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직
          alert("결제 완료!");
        } else {
          // 결제 실패 시 로직
          alert("결제 실패!");
        }
      }
    );
  };

  return (
    <MypageUIpage
      onClickPickBought={onClickPickBought}
      onClickPickList={onClickPickList}
      onClickPickSold={onClickPickSold}
      onClickPoint={onClickPoint}
    />
  );
}

export default withAuth(MypagePage);
