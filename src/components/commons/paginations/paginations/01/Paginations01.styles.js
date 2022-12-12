import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Page = styled.span`
  margin: 0 10px;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#ffd600" : "#4f4f4f")};
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  border-bottom: ${(props) => (props.isActive ? "1px solid #ffd600" : "")};
  transform: ${(props) => props.rotate};
`;

export const Img = styled.img`
  width: 7.41px;
`;
