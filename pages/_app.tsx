// import "../styles/globals.css";
// antd 를 사용하기 위해 전체에 적용을 시켜줍니다.
import 'antd/dist/antd.css';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RecoilRoot } from 'recoil';

import React from 'react';
import Head from 'next/head';
import ApolloSettingComponent from '../src/components/commons/apollo';
import LayoutComponent from '../src/components/commons/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>CodeCamp_Portfolio</title>
        <link rel='icon' href='/chihunIcon.jpg' />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <RecoilRoot>
        <ApolloSettingComponent>
          <LayoutComponent>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </LayoutComponent>
        </ApolloSettingComponent>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
