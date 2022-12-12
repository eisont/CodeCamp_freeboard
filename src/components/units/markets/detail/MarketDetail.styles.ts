// 중고마켓 상세보기 styles

import styled from "@emotion/styled";
import {
  UserOutlined,
  LinkOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 64px 0;
  width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarketNewTable = styled.div`
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
export const ProductName = styled.div`
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
export const Section1Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Section1LBox = styled.div``;
export const Section1RBox = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;

  background: #999;
`;

export const SectionText = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: #999;
`;
export const SectionPrice = styled.div`
  font-weight: 900;
  font-size: 36px;
`;
export const SectionPhoto = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Image = styled.img`
  height: 300px;
  object-fit: contain;
`;
export const SectionContent = styled.p`
  font-size: 16px;
  margin: 40px 0 0 0;
`;

export const SectionTags = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Text = styled.span`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: yellow;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  padding: 2px 10px;
  margin: 20px 5px 20px 0;
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
