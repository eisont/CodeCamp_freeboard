// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { v4 as uuidv4 } from "uuid";
import { PointComma } from "../../../../commons/libraries/point";
import { Heartsvg } from "../../../../commons/styles/Iconsvg";
import MarketListCarousel from "../../../commons/carousel/marketList";

const MarketListBestProduct = (pr) => {
  return (
    <S.BestProductBox key={uuidv4()}>
      <div id={pr.el._id} onClick={pr.onClickMoveToMarketDetail(pr.el)}>
        <MarketListCarousel data={pr?.el?.images} />
      </div>
      <S.BestProductName>{pr.el?.name}</S.BestProductName>
      <S.BestProductRemark>{pr.el?.remarks}</S.BestProductRemark>
      <S.BestProductPrice>{PointComma(pr.el?.price)}원</S.BestProductPrice>
      <S.BestProductLikeBox>
        <Heartsvg
          margin="0 0 4.65 0"
          width="20"
          height="18.35"
          fill="#ffd600"
        />
        <S.BestProductLikeCount>{pr.el?.pickedCount}</S.BestProductLikeCount>
      </S.BestProductLikeBox>
    </S.BestProductBox>
  );
};

export default MarketListBestProduct;
