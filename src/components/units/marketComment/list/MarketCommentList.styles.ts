// 중고마켓 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
`;

export const TitleBox = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;
export const Contents = styled.div`
  margin: 4px 0 20px 0;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const CreateAt = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const BtBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Bt = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: #bdbdbd;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
