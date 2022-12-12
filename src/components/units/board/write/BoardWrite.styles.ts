// 게시판 등록 styles

import styled from "@emotion/styled";
import { ISubmitButtonsProps } from "./BoardWrite.types";

export const Wrapper = styled.form`
  width: 1200px;
  margin: 100px auto;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const ZonecodeWrapper = styled.div`
  display: flex;
`;

export const Zonecode = styled.input`
  width: 100px;
  height: 52px;
  line-height: 33px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
  padding: 10px 10px;
  cursor: default;
  outline: none;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  line-height: 32px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Addressbasic = styled.input`
  width: 996px;
  height: 52px;
  line-height: 32px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  padding: 10px 10px;
  outline: none;
`;

export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  padding: 10px 10px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;
export const ImageTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  background-color: ${(props: ISubmitButtonsProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
