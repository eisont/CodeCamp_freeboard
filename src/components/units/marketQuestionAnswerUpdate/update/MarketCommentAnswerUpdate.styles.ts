// 중고마켓 댓글 등록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

export const PencilIcon = styled(QuestionOutlined)`
  font-size: 25px;
  color: #ffd600;
  margin: 20px 14px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
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
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Star = styled(Rate)``;
