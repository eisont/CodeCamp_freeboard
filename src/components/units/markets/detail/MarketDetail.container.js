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
  FETCH_USER_LOGGED_IN,
} from "./MarketDetail.queries";
import { withAuth } from "../../../commons/hocs/withAuth";

const MarketDetail = () => {
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const router = useRouter();

  // 조회
  const { data: fetchUsedItemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  const { data: likeCount } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);
  const { data: UserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  // 삭제
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  // 찜하기
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

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
    if (
      UserLoggedIn?.fetchUserLoggedIn?.email ===
      fetchUsedItemData?.fetchUseditem?.seller?.email
    ) {
      router.push(`/markets/${router.query.useditemId}/edit`);
    } else {
      alert("수정하기는 본인 게시물만 가능합니다.");
    }
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push("/markets");
    } catch (error) {
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
      alert(`${fetchUsedItemData?.fetchUseditem?.name}을 구매하셨습니다.`);
      alert("새로고침 후 포인트 차감 확인 가능합니다.");
    } catch (errors) {
      alert(errors.message);
    }
  };

  return (
    <MarketDetailUI
      // 게시판의 정보를 담은 객체 data
      fetchUsedItemData={fetchUsedItemData}
      likeCount={likeCount}
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
};

export default withAuth(MarketDetail);
