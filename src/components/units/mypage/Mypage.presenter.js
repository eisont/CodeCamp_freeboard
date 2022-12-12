import Script from "next/script";
import { PointComma } from "../../../commons/libraries/point";
import * as S from "./Mypage.styles";
import {
  Cartsvg,
  PointPigsvg,
  Profilesvg,
} from "../../../commons/styles/Iconsvg";
import MyMarketsItems from "../../commons/mypageComponents/myMarketItems/MyMarketItems.container";
import MyPoint from "../../commons/mypageComponents/myPoint/MyPoint.container";
import MyProfile from "../../commons/mypageComponents/myProfile/MyProfile.container";
import Uploads02 from "../../commons/uploads/02/Uploads02.containder";

const MypageUIpage = (pr) => {
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
        <S.UserInfo>
          <S.Title>MYPAGE</S.Title>

          <Uploads02
            picture={pr.loggedInUser?.picture}
            myProfile={pr.myProfile}
          />

          <S.UserName>{pr.loggedInUser?.name}</S.UserName>
          <S.UserPoint>
            <PointPigsvg
              width="20"
              height="19"
              fill="#ffd600"
              margin="0 8px 0 0"
            />
            <div>{PointComma(pr.loggedInUser?.userPoint?.amount)}원</div>
          </S.UserPoint>

          {/* Section */}
          <S.MyMarketsItems
            myMarketsItems={pr.myMarketsItems}
            onClick={pr.onClickMyMarketItems}
          >
            <Cartsvg width="21" height="20" fill="#FFD600" margin="0 8px 0 0" />
            내 장터
          </S.MyMarketsItems>

          <S.MyPoint myPoint={pr.myPoint} onClick={pr.onClickMyPoint}>
            <PointPigsvg
              width="20"
              height="19"
              fill="#828282"
              margin="0 8px 0 0"
            />
            내 포인트
          </S.MyPoint>

          <S.MyProfile myProfile={pr.myProfile} onClick={pr.onClickMyProfile}>
            <Profilesvg
              width="20"
              height="20"
              fill="#828282"
              margin="0 8px 0 0"
            />
            내 프로필
          </S.MyProfile>
        </S.UserInfo>

        <S.Hr />

        {/* 내 장터 */}
        {pr.myMarketsItems && <MyMarketsItems />}

        {/* 내 포인트 */}
        {pr.myPoint && <MyPoint />}

        {/* 내 프로필 */}
        {pr.myProfile && <MyProfile />}
      </S.Wrapper>
    </>
  );
};

export default MypageUIpage;
