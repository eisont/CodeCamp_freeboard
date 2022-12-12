import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Wrapper = styled.div`
  width: 80%;
  // background: #f00;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const Page = styled.span`
  font-size: 25px;
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "default" : "pointer")};
`;
