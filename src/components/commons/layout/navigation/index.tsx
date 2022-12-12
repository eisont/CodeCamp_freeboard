// LayoutNavigation Page

import { useRouter } from "next/router";
import * as S from "./Navigation.styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const isBoard = router.asPath.includes("/boards");
  const isMarkets = router.asPath.includes("/markets");
  const isMyPage = router.asPath.includes("/mypage");

  // const Board = ["/boards"];
  // const isBoard = Board.includes(router.asPath);
  // const Markets = ["/markets"];
  // const isMarkets = Markets.includes(router.asPath);

  // const MyPage = ["/mypage"];
  // const isMyPage = MyPage.includes(router.asPath);

  const onClickBoard = () => {
    router.push("/boards");
  };
  const onClickMarket = () => {
    router.push("/markets");
  };
  const onClickMypage = () => {
    router.push("/mypage");
  };
  return (
    <S.Wrapper>
      <S.PageBt onClick={onClickBoard} isBoard={isBoard}>
        자유게시판
      </S.PageBt>
      <S.Hr />
      <S.PageBt onClick={onClickMarket} isMarkets={isMarkets}>
        중고마켓
      </S.PageBt>
      <S.Hr />
      <S.PageBt onClick={onClickMypage} isMyPage={isMyPage}>
        My-Page
      </S.PageBt>
    </S.Wrapper>
  );
}
