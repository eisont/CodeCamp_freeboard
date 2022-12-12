// 중고마컷 상세보기 container

import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import MarketDetailUI from "./MarketDetail.presenter";
import { Modal } from "antd";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEMS_COUNT_IPICKED,
} from "./MarketDetail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";
import { withAuth } from "../../../commons/hocs/withAuth";

function MarketDetail() {
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const router = useRouter();

  // 조회
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: ipicked } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);

  // 삭제
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);
  // 찜하기
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  // 찜하기
  const onClickPickedCount = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.useditemId) },

      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: String(router.query.useditemId) },
        },
      ],
    });
  };

  // 목록 이동 버튼
  const onClickMoveToMarketList = () => {
    router.push("/markets");
  };
  // 수정하기 이동 버튼
  const onClickMoveToMarketEdit = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push("/markets");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  // 구매 버튼
  const onClickBuy = async () => {
    // 구매 버튼
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.useditemId),
        },
      });
      alert(`${data?.fetchUseditem?.name}을 구매하셨습니다.`);
      alert("새로고침 후 포인트 차감 확인 가능합니다.");
    } catch (errors) {
      alert(errors.message);
    }
  };

  return (
    <MarketDetailUI
      // 게시판의 정보를 담은 객체 data
      data={data}
      ipicked={ipicked}
      // pickedCount 버튼
      onClickPickedCount={onClickPickedCount}
      // 목록으로 버튼
      onClickMoveToMarketList={onClickMoveToMarketList}
      // 수정하기로 버튼
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      // 삭제 버튼
      onClickDelete={onClickDelete}
      // 구매 버튼
      onClickBuy={onClickBuy}
    />
  );
}

export default withAuth(MarketDetail);
