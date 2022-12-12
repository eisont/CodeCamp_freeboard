// 중고마켓 상세보기 presenter

import { getDatecomma } from "../../../../commons/libraries/utils";
import * as S from "./MarketDetail.styles";
import { Tooltip } from "antd";
import Script from "next/script";
import KakaoMapShowPage from "../../../commons/kakaomap/show";
import Dompurify from "dompurify";
import { PointComma } from "../../../../commons/libraries/point";
import {
  Addresssvg,
  Heartsvg,
  LinkIconsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";
import MarketDetailCarousel from "../../../commons/carousel/marketdetail";

const MarketDetailUI = (pr) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.Header>
          <S.SellerInfoBox>
            {pr.fetchUsedItemData?.fetchUseditem?.seller?.picture === null ? (
              <Profilesvg width="40" height="40" fill="#bdbdbd" />
            ) : (
              <S.SellerPhoto
                src={
                  pr.fetchUsedItemData?.fetchUseditem?.seller?.picture?.includes(
                    "data:image"
                  )
                    ? pr.fetchUsedItemData?.fetchUseditem?.seller?.picture
                    : `https://storage.googleapis.com/${pr.fetchUsedItemData?.fetchUseditem?.seller?.picture}`
                }
              />
            )}
            <S.SellerInfo>
              <S.SellerName>
                {pr.fetchUsedItemData?.fetchUseditem?.seller?.name.length === 0
                  ? "판매자 이름 없음"
                  : pr.fetchUsedItemData?.fetchUseditem?.seller?.name}
              </S.SellerName>
              <S.CreatedAt>
                Date:
                {getDatecomma(pr.fetchUsedItemData?.fetchUseditem?.createdAt)}
              </S.CreatedAt>
            </S.SellerInfo>
          </S.SellerInfoBox>

          <S.SideInfo>
            <LinkIconsvg
              margin="0 15px 0 0"
              width="28"
              height="14"
              fill="#ffd600"
            />
            <Tooltip
              placement="top"
              title={`${pr.fetchUsedItemData?.fetchUseditem.useditemAddress?.address} ${pr.fetchUsedItemData?.fetchUseditem.useditemAddress?.addressDetail}`}
            >
              {/* div로 감싸지 않으면 Tooltip이 적용이 되지 않습니다. */}
              <div>
                <Addresssvg width="32" height="32" fill="#ffd600" />
              </div>
            </Tooltip>
          </S.SideInfo>
        </S.Header>

        <S.Hr />

        <S.FlexBox>
          <S.ColumnBox>
            <S.ItemRemarks>
              {pr.fetchUsedItemData?.fetchUseditem?.remarks}
            </S.ItemRemarks>
            <S.ItemName>{pr.fetchUsedItemData?.fetchUseditem?.name}</S.ItemName>
          </S.ColumnBox>
          <S.HeartBox onClick={pr.onClickPickedCount}>
            {pr.fetchUsedItemData?.fetchUseditem?.pickedCount === 0 ? (
              <S.OutLineHeart />
            ) : (
              <Heartsvg margin="0 0 4px 0" width="30" fill="#ffd600" />
            )}
            <S.LikeCount>
              {pr.likeCount?.fetchUseditemsCountIPicked}
            </S.LikeCount>
          </S.HeartBox>
        </S.FlexBox>

        <S.ItemPrice>
          {PointComma(pr.fetchUsedItemData?.fetchUseditem?.price)}원
        </S.ItemPrice>

        <S.CarouselBox>
          <MarketDetailCarousel
            data={pr.fetchUsedItemData?.fetchUseditem?.images}
          />
        </S.CarouselBox>

        {typeof window !== "undefined" && (
          <S.SectionContent
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(pr.fetchUsedItemData?.fetchUseditem?.contents)
              ),
            }}
          />
        )}

        <S.SectionTags>
          {pr.data?.fetchUseditem?.tags?.map((el, idx) => (
            <S.Tags key={idx}>{el}</S.Tags>
          ))}
        </S.SectionTags>

        <S.Hr />

        <S.MapBox>
          <KakaoMapShowPage data={pr.data} />
        </S.MapBox>

        <S.Hr />

        <S.MenuButtons>
          <S.GrayBt onClick={pr.onClickMoveToMarketList}>목록으로</S.GrayBt>
          <S.YellowBt onClick={pr.onClickMoveToMarketEdit}>수정하기</S.YellowBt>
          <S.YellowBt id={pr.useditemId} onClick={pr.onClickDelete}>
            삭제하기
          </S.YellowBt>
          <S.YellowBt onClick={pr.onClickBuy}>구매</S.YellowBt>
        </S.MenuButtons>
      </S.Wrapper>
    </>
  );
};

export default MarketDetailUI;
