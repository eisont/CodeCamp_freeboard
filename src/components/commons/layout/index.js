// Layout Page

import styled from "@emotion/styled";
import LayoutHeader from "./header/Header.container";
import LayoutBanner from "./banner";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal1 from "./loginmodal";
import LayoutFooter from "./footer";
import PointChargeModal from "./PointChargeModal/PointChargeModal.container";
import LayoutNavigation from "./navigation";

const Body = styled.div``;

const Layout = (pr) => {
  const [isChargeModal, setIsChargeModal] = useState(false);

  const router = useRouter();
  const MainPage = ["/"];
  const LoginPage = ["/login"];
  const SignupPage = ["/signup"];

  const Boards = ["/boards"];
  const Markets = ["/markets"];

  const Mypage = ["/mypage"];

  const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isSignupPage = SignupPage.includes(router.asPath);

  const isBoards = Boards.includes(router.asPath);
  const isMarkets = Markets.includes(router.asPath);
  const isMypage = Mypage.includes(router.asPath);

  return (
    <>
      {!isLoginPage && !isSignupPage && !isMainPage && (
        <LayoutHeader
          isChargeModal={isChargeModal}
          setIsChargeModal={setIsChargeModal}
        />
      )}

      {isChargeModal && (
        <PointChargeModal
          isChargeModal={isChargeModal}
          setIsChargeModal={setIsChargeModal}
        />
      )}

      {!isLoginPage && !isSignupPage && !isMainPage && <LayoutNavigation />}

      {(isBoards || isMarkets || isMypage) && <LayoutBanner />}
      <Modal1 />

      <Body>{pr.children}</Body>
      {!isLoginPage && !isSignupPage && <LayoutFooter />}
    </>
  );
};

export default Layout;
