// 게시판 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  padding: 40px 0 0 0;
  width: 1200px;
  height: 128px;
  margin: 0px auto;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 10px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Contents = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  padding: 20px 0 0 0;
  color: #dbdbdb;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;

export const Hr = styled.div`
  margin: 20px 0 0 0;
  width: 1200px;
  height: 1px;
  background-color: #dbdbdb;
`;
