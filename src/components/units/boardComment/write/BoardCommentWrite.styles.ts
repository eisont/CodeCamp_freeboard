// 게시판 댓글 등록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;
export const Flexbox = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;
export const Star = styled(Rate)``;

export const ContentsWrapper = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 52px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
