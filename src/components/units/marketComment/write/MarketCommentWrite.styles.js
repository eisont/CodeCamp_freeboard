// 중고마켓 댓글 등록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 0 0 20px 0;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;

  display: flex;
  align-items: center;
`;

export const ContentsWrapper = styled.div`
  margin: 40px 0 0 0;
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  min-height: 108px;
  padding: 20px;
  border: none;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #f2f2f2;
`;

export const ContentsLength = styled.div`
  width: 43px;
  height: 24px;
  padding-left: 40px;
  color: #bdbdbd;
`;

export const Button = styled.div`
  width: 91px;
  height: 51px;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Star = styled(Rate)``;
