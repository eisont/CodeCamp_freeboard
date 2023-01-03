// import "../styles/globals.css";
// antd 를 사용하기 위해 전체에 적용을 시켜줍니다.
import 'antd/dist/antd.css';
import { Global } from '@emotion/react';
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// recoil을 사용하기 위해서는 RecoilRoot로 감싸줘야 합니다.
import { RecoilRoot } from 'recoil';
import ApolloSetting from '../src/components/commons/apollo';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CodeCamp_Portfolio</title>
        <link rel='icon' href='/chihunIcon.jpg' />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
