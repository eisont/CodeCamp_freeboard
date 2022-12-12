import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Page = styled.span`
  margin: 0 10px;
  font-size: 16px;
  color: ${(props: IPageProps) => (props.isActive ? "#ffd600" : "#4f4f4f")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "700" : "400")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
  border-bottom: ${(props: IPageProps) =>
    props.isActive ? "1px solid #ffd600" : ""};
  transform: ${(props) => props.rotate};
`;

export const Img = styled.img`
  width: 7.41px;
`;
