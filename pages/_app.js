// import "../styles/globals.css";
// antd 를 사용하기 위해 전체에 적용을 시켜줍니다.
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CodeCamp_Portfolio</title>
        <link rel="icon" href="/chihunIcon.jpg" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
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
