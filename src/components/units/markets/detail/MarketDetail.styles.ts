// 중고마켓 상세보기 styles

import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  margin: 0 auto;
  /* width: 792px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SellerInfoBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SellerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SellerInfo = styled.div`
  margin: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SellerName = styled.div`
  padding: 0 0 2px 0;
  font-size: 16px;
  font-weight: 700;
`;
export const CreatedAt = styled.div`
  color: #828282;
  font-weight: 400;
  font-size: 12px;
`;

export const SideInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Hr = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 1px;
  background: #dbdbdb;
`;

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemRemarks = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #dbdbdb;
`;
export const ItemName = styled.div`
  padding: 4px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  color: #4f4f4f;
`;

export const HeartBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeCount = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;
export const OutLineHeart = styled(HeartOutlined)`
  margin: 0 0 4px 0;
  font-size: 30px;
  color: #ffd600;
`;

export const ItemPrice = styled.div`
  padding: 8px 0 0 0;
  width: 100%;

  font-weight: 700;
  font-size: 36px;
  color: #000;
`;

export const CarouselBox = styled.div`
  padding: 80px 0;
`;

export const SectionContent = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #4f4f4f;
`;

export const SectionTags = styled.div`
  margin: 40px 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Tags = styled.span`
  margin: 0 10px 0 0;
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const MapBox = styled.div`
  padding: 60px 0;
`;

export const MenuButtons = styled.div`
  margin: 70px 12px;
  display: flex;
  align-items: center;
`;

export const GrayBt = styled.div`
  margin: 0 24px 0 0;
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  background: #dbdbdb;
  color: #4f4f4f;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: #fff;
  }
`;
export const YellowBt = styled.div`
  margin: 0 24px 0 0;
  width: 180px;
  height: 52px;
  font-size: 16px;
  font-weight: 500;
  background: #ffd600;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: #fff;
  }
`;
