// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { PointComma } from "../../../../commons/libraries/point";
import {
  Eurosvg,
  Heartsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";

const MarketListUIItem = (pr) => {
  const ImageResult = pr.el?.images.filter((el) => el);
  return (
    <S.Row key={pr.el?._id}>
      <S.FlexOutBox>
        <S.FlexBox>
          {ImageResult[0]?.length === undefined ? (
            <S.BestNoImgBox>
              <CodeCampLogosvg width="130" fill="#000" />
            </S.BestNoImgBox>
          ) : (
            <S.Image
              src={`https://storage.googleapis.com/${ImageResult[0]}`}
              id={pr.el?._id}
              onClick={pr.onClickMoveToMarketDetail(pr.el)}
            />
          )}

          <S.ColumnBox>
            <S.Name>{pr.el?.name}</S.Name>
            <S.Remarks>{pr.el?.remarks} </S.Remarks>
            {pr.el.tags?.length === 0 ? (
              <S.ColumnTags>해시태그 없음</S.ColumnTags>
            ) : (
              <S.ColumnTags> {pr.el?.tags} </S.ColumnTags>
            )}

            <S.FlexBox style={{ margin: "24px 0 0 0" }}>
              {pr.el?.seller?.picture === null ? (
                <Profilesvg
                  margin="0 6px 0 0"
                  width="20"
                  height="20"
                  fill="#bdbdbd"
                />
              ) : (
                <S.SellerIcon
                  src={
                    pr.el?.seller?.picture.includes("data:image")
                      ? pr.el?.seller?.picture
                      : `https://storage.googleapis.com/${pr.el?.seller?.picture}`
                  }
                />
              )}
              {pr.el?.seller?.name?.length === 0 ? (
                <S.Seller> 판매자 이름 없음 </S.Seller>
              ) : (
                <S.Seller> {pr.el?.seller?.name} </S.Seller>
              )}
              <Heartsvg
                margin="0 6px 0 0"
                width="20"
                height="18.35"
                fill="#ffd600"
              />
              <S.Pick> {pr.el?.pickedCount} </S.Pick>
            </S.FlexBox>
          </S.ColumnBox>
        </S.FlexBox>

        <S.FlexPrice>
          <Eurosvg margin="0 11px 0 0" width="18" height="18" fill="#FFD600" />
          {PointComma(pr.el?.price)}원
        </S.FlexPrice>
      </S.FlexOutBox>
    </S.Row>
  );
};

export default MarketListUIItem;
