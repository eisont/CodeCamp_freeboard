import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  box-shadow: 0 1px 0 #dbdbdb;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BtBox = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Page = styled.div`
  display: flex;
  align-items: center;
`;
export const PageBt = styled.div`
  padding: 0 50px 0 0;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #999;
    font-weight: 900;
  }
`;
export const WriteBt = styled.div`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #999;
    font-weight: 900;
  }
`;
