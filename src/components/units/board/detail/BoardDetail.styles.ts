// 게시판 상세보기 styles

import styled from "@emotion/styled";
import {
  UserOutlined,
  LinkOutlined,
  EnvironmentOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardNewTable = styled.div`
  width: 1200px;
  padding: 80px 0;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 0px 10px #bdbdbd;
`;

export const Header = styled.div`
  width: 996px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
`;

export const UserInformation = styled.div`
  display: flex;
  align-items: center;
`;
export const UserProfilePhoto = styled(UserOutlined)`
  font-size: 47px;
  margin-right: 20px;
`;
export const UserProfile = styled.div``;
export const UserName = styled.div`
  font-size: 24px;
  font-weight: 900;
`;
export const CreatedAt = styled.div`
  color: #828282;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const SharingImg = styled(LinkOutlined)`
  ursor: pointer;
  transform: rotate(45deg);
  font-size: 26px;
  color: #ffd600;
`;
export const LotationImg = styled(EnvironmentOutlined)`
  margin-left: 25px;
  font-size: 27px;
  color: #ffd600;
`;

export const Body = styled.div`
  width: 996px;
  margin: 0 auto;
`;

export const SectionText = styled.div`
  margin: 80px 0 40px;
  font-weight: 900;
  font-size: 36px;
`;
export const SectionPhoto = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 996px;
  height: 480px;
  object-fit: contain;
`;
export const SectionContent = styled.p`
  font-size: 16px;
  margin: 40px 0 0 0;
`;

export const SectionVideoBox = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionVideoURL = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeButtonBox = styled.div`
  width: 996px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeButton = styled.div`
  flex-direction: column;
  text-align: center;
  margin-right: 40px;
  // background: #f00;
`;
export const LikeButtonImg = styled(LikeOutlined)`
  font-size: 40px;
  color: #ffd600;
  cursor: pointer;
  // background: #ff0;
`;
export const LikeNumber = styled.p`
  color: #ffd600;
  font-size: 25px;
  font-weight: 900;
  // background: #f0f;
  cursor: default;
`;

export const DisLikeButton = styled.div`
  flex-direction: column;
  text-align: center;
`;
export const DisLikeButtonImg = styled(LikeOutlined)`
  font-size: 40px;
  transform: rotate(180deg);
  color: #828282;
  cursor: pointer;
`;
export const DisLikeNumber = styled.p`
  color: #828282;
  font-size: 25px;
  font-weight: 900;
  cursor: default;
`;

export const MenuButtons = styled.div`
  display: flex;
`;
export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin: 87px 12px;
  font-size: 16px;
  font-weight: 600;
  display: inline;
  background: #fff;
  border: 1px solid #bdbdbd;
  &:hover {
    background-color: gold;
    border-color: white;
  }
`;

export const WrapperHr = styled.div`
  width: 1200px;
  height: 1px;
  background: #bdbdbd;
`;
