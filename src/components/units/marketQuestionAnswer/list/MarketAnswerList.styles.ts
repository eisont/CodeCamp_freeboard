// 중고마켓 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";
import { FormOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 1200px;
  margin: 0 auto 20px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ContentsBox = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;
export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
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

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const QuestionIcon = styled(FormOutlined)`
  font-size: 24px;
  color: #888;
  cursor: pointer;
`;
export const UpdateBt = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export const DeleteBt = styled.div`
  &:hover {
    cursor: pointer;
  }
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
