// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { PointComma } from "../../../../commons/libraries/point";
// import { getDate } from "../../../../commons/libraries/utils";
import {
  Eurosvg,
  Heartsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";

const MarketListUIItem = (props: any) => {
  return (
    <S.Row key={props.el?._id}>
      <S.FlexOutBox>
        <S.FlexBox>
          <S.Image
            id={props.el?._id}
            onClick={props.onClickMoveToMarketDetail(props.el)}
            src={
              props.el?.images[0]
                ? `https://storage.googleapis.com/${props.el?.images[0]}`
                : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
            }
          />

          <S.ColumnBox>
            <S.Name>{props.el?.name}</S.Name>
            <S.Remarks>{props.el?.remarks} </S.Remarks>
            {props.el.tags?.length === 0 ? (
              <S.ColumnTags>해시태그 없음</S.ColumnTags>
            ) : (
              <S.ColumnTags> {props.el?.tags} </S.ColumnTags>
            )}

            <S.FlexBox style={{ margin: "24px 0 0 0" }}>
              {props.el?.seller?.picture === null ? (
                <Profilesvg
                  margin="0 6px 0 0"
                  width="20"
                  height="20"
                  fill="#bdbdbd"
                />
              ) : (
                <S.SellerIcon
                  src={
                    props.el?.seller?.picture.includes("data:image")
                      ? props.el?.seller?.picture
                      : `https://storage.googleapis.com/${props.el?.seller?.picture}`
                  }
                />
              )}
              {props.el?.seller?.name?.length === 0 ? (
                <S.Seller> 판매자 이름 없음 </S.Seller>
              ) : (
                <S.Seller> {props.el?.seller?.name} </S.Seller>
              )}
              <Heartsvg
                margin="0 6px 0 0"
                width="20"
                height="18.35"
                fill="#ffd600"
              />
              <S.Pick> {props.el?.pickedCount} </S.Pick>
            </S.FlexBox>
          </S.ColumnBox>
        </S.FlexBox>

        <S.FlexPrice>
          <Eurosvg margin="0 11px 0 0" width="18" height="18" fill="#FFD600" />
          {PointComma(props.el?.price)}원
        </S.FlexPrice>
      </S.FlexOutBox>
    </S.Row>
  );
};

export default MarketListUIItem;
