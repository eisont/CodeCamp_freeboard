// Header Container

import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BasketCountState } from '../../../../commons/store';
import { FETCH_USED_ITEMS_COUNT_IPICKED, FETCH_USER_LOGGED_IN, D_FETCH_USER_LOGGED_IN, LOGOUT_USER } from './Header.queries';
import LayoutHeaderUI from './Header.presenter';

const LayoutHeader = (pr) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const [basketCount, setBasketCount] = useRecoilState(BasketCountState);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [loggedIn, setLoggedIn] = useState('');

  const { data: IPicked } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);
  // const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    D_FETCH_USER_LOGGED_IN().then((result) => {
      setLoggedIn(result.data);
    });
  }, []);

  // 메인페이지 이동
  const onClickHome = () => {
    router.push('/');
  };
  // 로그인 이동
  const onClickLogin = () => {
    router.push('/login');
  };
  // 마이페이지 이동
  const onClickMypage = () => {
    router.push('/mypage');
  };
  // 로그아웃 기능
  const onClickLogout = async () => {
    try {
      await logoutUser();
      location.reload();
    } catch (error) {
      alert(error.message);
    }
  };
  // 회원가입 이동
  const onClickSignup = () => {
    router.push('/signup');
  };

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  const onClickChangeImage = () => {
    alert('이미지 변경 버튼');
  };

  // 장바구니 담기
  useEffect(() => {
    setBasketCount(JSON.parse(localStorage.getItem('baskets') || '[]').length);
  });

  // 포인트 충전 모달 창 띄우기
  const onClickCharge = () => {
    setIsModal(false);
    pr.setIsChargeModal(true);
  };

  return (
    <LayoutHeaderUI
      IPicked={IPicked}
      loggedIn={loggedIn?.fetchUserLoggedIn}
      basketCount={basketCount}
      onClickHome={onClickHome}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
      onClickSignup={onClickSignup}
      onClickModal={onClickModal}
      onClickMypage={onClickMypage}
      isModal={isModal}
      onClickChangeImage={onClickChangeImage}
      isChargeModal={pr.isChargeModal}
      onClickCharge={onClickCharge}
    />
  );
};

export default LayoutHeader;
