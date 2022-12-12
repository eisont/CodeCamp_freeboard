// 게시판 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";
import { UserOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
  padding-top: 20px;
  height: 128px;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled(UserOutlined)`
  font-size: 48px;
  color: #888;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled(EditOutlined)`
  font-size: 24px;
  cursor: pointer;
  color: #888;
`;
export const DeleteIcon = styled(CloseOutlined)`
  font-size: 24px;
  color: #888;
  cursor: pointer;
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
