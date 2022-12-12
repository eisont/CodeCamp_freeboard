// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { v4 as uuidv4 } from "uuid";
import { PointComma } from "../../../../commons/libraries/point";
import { Heartsvg } from "../../../../commons/styles/Iconsvg";

const MarketListBestProduct = (props: any) => {
  return (
    <S.BestProductBox key={uuidv4()}>
      <S.BestProductImage
        id={props.el._id}
        onClick={props.onClickMoveToMarketDetail(props.el)}
        src={`https://storage.googleapis.com/${props.el?.images[0]}`}
      />
      <S.BestProductName>{props.el?.name}</S.BestProductName>
      <S.BestProductRemark>{props.el?.remarks}</S.BestProductRemark>
      <S.BestProductPrice>{PointComma(props.el?.price)}원</S.BestProductPrice>
      <S.BestProductLikeBox>
        <Heartsvg
          margin="0 0 4.65 0"
          width="20"
          height="18.35"
          fill="#ffd600"
        />
        <S.BestProductLikeCount>{props.el?.pickedCount}</S.BestProductLikeCount>
      </S.BestProductLikeBox>
    </S.BestProductBox>
  );
};

export default MarketListBestProduct;
