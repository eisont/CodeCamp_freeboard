// LayoutNavigation Page

import { useRouter } from "next/router";
import * as S from "./Navigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const Board = ["/boards"];
  const BoardNew = ["/boards/new"];
  const isBoard = Board.includes(router.asPath);
  const isBoardNew = BoardNew.includes(router.asPath);
  const Markets = ["/markets"];
  const MarketsNew = ["/markets/new"];
  const isMarkets = Markets.includes(router.asPath);
  const isMarketsNew = MarketsNew.includes(router.asPath);

  const onClickBoard = () => {
    router.push("/boards");
  };
  const onClickMarket = () => {
    router.push("/markets");
  };
  const onClickMypage = () => {
    router.push("/mypage");
  };
  const onClickMoveToMarketNew = () => {
    router.push("/markets/new");
  };
  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  return (
    <S.Wrapper>
      <S.BtBox>
        <S.Page>
          <S.PageBt onClick={onClickBoard}>Board</S.PageBt>
          <S.PageBt onClick={onClickMarket}>Market</S.PageBt>
          <S.PageBt onClick={onClickMypage}>My-Page</S.PageBt>
        </S.Page>
        {(isBoardNew || isBoard) && (
          <S.WriteBt onClick={onClickMoveToBoardNew}>게시판 등록</S.WriteBt>
        )}
        {(isMarketsNew || isMarkets) && (
          <S.WriteBt onClick={onClickMoveToMarketNew}>상품 등록</S.WriteBt>
        )}
      </S.BtBox>
    </S.Wrapper>
  );
}
