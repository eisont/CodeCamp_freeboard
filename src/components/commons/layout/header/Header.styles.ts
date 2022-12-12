// Header styles

import { AppleFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 40px;
  background: #000;
`;
export const CenterBox = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dbdbdb;
`;

export const HomeBt = styled(AppleFilled)`
  font-size: 25px;
  cursor: pointer;
  trasition: 0.2s;
  color: #dbdbdb;
  &:hover {
    color: #fff;
  }
`;
export const RightBox = styled.div`
  display: flex;
`;
export const MenuBt = styled.div`
  margin: 0 0 0 10px;
  font-size: 14px;
  font-weight: 500;
  trasition: 0.2s;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
export const Point = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
`;
export const Text = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: default;
`;
export const MenuBasketBt = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
`;
export const BasketNum = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #f00;
  background: #dbdbdb;
  border-radius: 50%;
`;
