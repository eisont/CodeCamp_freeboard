// Layout Page

import styled from "@emotion/styled";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import WatchProduct from "../WatchProduct";

const Wrapper = styled.div``;
const Body = styled.div``;
const Fixed = styled.div`
  position: fixed;
  right: 0;
  top: 257px;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const MainPage = ["/"];
  const LoginPage = ["/login"];
  const SignupPage = ["/signup"];
  const MarketWrite = ["/markets/new"];
  const MarketDetail = [`/markets/${router.query.useditemId}`];
  const MarketEdit = [`/markets/${router.query.useditemId}/edit`];
  const Mypage = ["/boards/mypage"];

  const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isSignupPage = SignupPage.includes(router.asPath);
  const isMarketWrite = MarketWrite.includes(router.asPath);
  const isMarketDetail = MarketDetail.includes(router.asPath);
  const isMarketEdit = MarketEdit.includes(router.asPath);
  return (
    <>
      <Wrapper>
        {!isMainPage && <LayoutHeader />}
        {!isMainPage && <LayoutNavigation />}

        {!isMainPage && !Mypage && <LayoutBanner />}
        <Fixed>
          {!isLoginPage &&
            !isSignupPage &&
            !isMarketDetail &&
            !isMarketWrite &&
            !isMarketEdit && <WatchProduct />}
        </Fixed>

        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
