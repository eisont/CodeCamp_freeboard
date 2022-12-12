import styled from "@emotion/styled";

export const Section = styled.div`
  padding: 80px 0 0 126px;
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.div`
  margin: 0 0 30px 0;
  font-weight: 700;
  font-size: 24px;
  color: #000;
`;

export const FlexBox = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
`;
export const InputFlexBox = styled.div`
  margin: 10px 0;
  width: 690px;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 15fr 1fr;
  background: rgba(244, 244, 244, 0.3);
`;
export const Input = styled.input`
  padding: 14px 16px;
  height: 52px;

  background: transparent;
  outline: none;
  border: none;

  font-weight: 400;
  font-size: 16px;

  ::placeholder {
    color: #bdbdbd;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const ClickBt = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightBox = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.div`
  width: 180px;
  height: 52px;
  background: #bdbdbd;
  font-weight: 700;
  font-size: 16px;
  color: #4f4f4f;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: #000;
    background: #ffd600;
  }
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Error = styled.div`
  font-weight: 900;
  font-size: 16px;
  color: ${(props) => props.color};
`;
