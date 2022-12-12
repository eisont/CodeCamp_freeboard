// LayoutNavigation Page

import { useRouter } from "next/router";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffd600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`;

export const PageBt = styled.div`
  font-size: 18px;
  font-weight: ${(props) =>
    props.isMarkets || props.isBoard || props.isMyPage ? "700" : "500"};
  color: ${(props) =>
    props.isMarkets || props.isBoard || props.isMyPage ? "#514400" : "#AB9000"};
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: #514400;
    font-weight: 700;
  }
`;

export const Hr = styled.div`
  margin: 0 40px;
  width: 1px;
  height: 20px;

  background: #fff;
`;

const LayoutNavigation = () => {
  const router = useRouter();

  const isBoard = router.asPath.includes("/boards");
  const isMarkets = router.asPath.includes("/markets");
  const isMyPage = router.asPath.includes("/mypage");

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
    <Wrapper>
      <PageBt onClick={onClickBoard} isBoard={isBoard}>
        자유게시판
      </PageBt>
      <Hr />
      <PageBt onClick={onClickMarket} isMarkets={isMarkets}>
        중고마켓
      </PageBt>
      <Hr />
      <PageBt onClick={onClickMypage} isMyPage={isMyPage}>
        My-Page
      </PageBt>
    </Wrapper>
  );
};

export default LayoutNavigation;
