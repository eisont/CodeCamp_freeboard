// 게시판 등록 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px auto;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
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
  padding: 14px 14px 14px 16px;
  border: 1px solid #bdbdbd;
`;
export const TagWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding-top: 40px;
`;
export const TagRBox = styled.div`
  display: flex;
  flex-direction: column;
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
export const ZonecodeWrapper = styled.div`
  display: flex;
`;
export const Longitude = styled.input``;
export const Latitude = styled.input``;
export const Span = styled.span`
  margin: 0 10px;
`;

export const Zonecode = styled.input`
  width: 80px;
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

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;
export const ImageTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
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

  background-color: ${(props) => (props.isActive ? "yellow" : "none")};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
