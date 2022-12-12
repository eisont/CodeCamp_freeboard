// 중고마켓 상세보기 presenter

import { getDate } from "../../../../commons/libraries/utils";
import { IMarketDetailUIProps } from "./MarketDetail.types";
import * as S from "./MarketDetail.styles";
import { Tooltip } from "antd";
import Script from "next/script";
import KakaoMapShowPage from "../../../commons/kakaomap/show";
import Dompurify from "dompurify";
import SectionPhoto from "../../../commons/slickImage";
import MarketAnswerList from "../../marketQuestionAnswer/list/MarketAnswerList.container";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
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
        <S.MarketNewTable>
          <S.Header>
            <S.UserInformation>
              <S.UserProfilePhoto />
              <S.UserProfile>
                {/* seller */}
                <S.UserName>
                  {props.data?.fetchUseditem?.seller?.name}
                </S.UserName>
                {/* createAt */}
                <S.CreatedAt>
                  {getDate(props.data?.fetchUseditem?.createdAt)}
                </S.CreatedAt>
              </S.UserProfile>
            </S.UserInformation>
            <S.HeaderButtons>
              <S.SharingImg />
              {/* address, addressDetail */}
              <Tooltip
                placement="top"
                title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              >
                {props.data?.fetchUseditem.images && <S.LotationImg />}
              </Tooltip>
            </S.HeaderButtons>
          </S.Header>

          <S.Body>
            <S.Section1Box>
              <S.Section1LBox>
                <S.SectionText>
                  {props.data?.fetchUseditem?.remarks}
                </S.SectionText>
                <S.ProductName>{props.data?.fetchUseditem?.name}</S.ProductName>
              </S.Section1LBox>
              <S.Section1RBox onClick={props.onClickPickedCount}>
                {props.data?.fetchUseditem?.pickedCount}
                <div>{props.ipicked?.fetchUseditemsCountIPicked}</div>
              </S.Section1RBox>
            </S.Section1Box>
            <S.SectionPrice>
              {props.data?.fetchUseditem?.price}원
            </S.SectionPrice>

            <SectionPhoto data={props.data} />

            {typeof window !== "undefined" && (
              <S.SectionContent
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    String(props.data?.fetchUseditem?.contents)
                  ),
                }}
              />
            )}
            <KakaoMapShowPage data={props.data} />
            <S.SectionTags>
              {props.data?.fetchUseditem?.tags.map((el, idx) => (
                <S.Text key={idx}>{el}</S.Text>
              ))}
            </S.SectionTags>
          </S.Body>
        </S.MarketNewTable>

        <S.MenuButtons>
          <S.Button onClick={props.onClickMoveToMarketList}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveToMarketEdit}>수정하기</S.Button>
          <S.Button id={props.useditemId} onClick={props.onClickDelete}>
            삭제하기
          </S.Button>
          <S.Button onClick={props.onClickBuy}>구매</S.Button>
        </S.MenuButtons>
        <S.WrapperHr></S.WrapperHr>

        <MarketAnswerList />
      </S.Wrapper>
    </>
  );
}
