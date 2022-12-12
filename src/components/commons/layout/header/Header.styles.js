// Header styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  &:hover {
    cursor: default;
  }
`;

export const CenterBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const Picture = styled.img`
  margin: 0 28px 0 0;
  width: 48px;
  object-fit: cover;
`;

export const UserInfoBox = styled.div`
  position: relative;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const FlexBox2 = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalabsoluteBox = styled.div`
  position: absolute;
  top: 49px;
  right: -1px;
  z-index: 9999;

  animation-duration: 1s;
  animation-name: ModalArrow;

  @keyframes ModalArrow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const SettingabsoluteBox = styled.div`
  position: absolute;
  top: 32px;
  right: 0px;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 56px;
  right: -15px;
  z-index: 9998;
  width: 258px;
  height: 226px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  animation-duration: 1s;
  animation-name: ModalBox;

  @keyframes ModalBox {
    from {
      opacity: 0;
      height: 0px;
    }
    to {
      opacity: 1;
      height: 226px;
    }
  }
`;

export const UserInfo = styled.div`
  padding: 24px 26px;
  width: 100%;
  height: 96px;

  display: flex;
  align-items: center;

  border-radius: 16px;
`;
export const User = styled.div`
  margin: 0 0 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const UserName = styled.div`
  margin: 0 0 4px 0;
  font-weight: 700;
  font-size: 16px;
  color: #000;
`;
export const UserPoint = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #000;
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props) => props.Bg};
`;

export const MenuBox = styled.div`
  padding: 22px 38px;
  width: 100%;
  height: 64px;

  border-radius: 16px;
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 14px;
  color: #bdbdbd;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #ffd600;
    color: #000;
  }
`;

export const LoginBt = styled.div`
  margin: 0 20px 0 0;
  font-size: 16px;
  font-weight: 700;
  color: #000;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffd600;
  }
`;
export const SignupBt = styled.div`
  width: 92px;
  height: 44px;
  border-radius: 10px;
  background: #ffd600;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #ffd600;
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
