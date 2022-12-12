// 중고마켓 types

import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  useditemId?: any;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
  onClickBuy: () => void;
  onClickDelete: () => Promise<void>;
  onClickPickedCount: () => void;
}

export interface IMarketDetailProps {
  data: any;
  // 좋아요 & 삭제
  onlikeCount: () => void;
  ondislikeCount: () => void;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
  onClickDelete: () => void;
}
