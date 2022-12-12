import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 56px 0;
  width: 1200px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  cursor: default;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const UserName = styled.div`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: 700;
`;
export const UserPoint = styled.div`
  margin: 0 0 76px 0;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #4f4f4f;
`;
export const Icon = styled.img`
  margin: 0 8px 0 0;
  width: 20px;
`;

export const Hr = styled.div`
  margin: 0 40px;
  width: 2px;
  height: 1100px;
  transform: translate(0, -56px);
  background: rgba(242, 242, 242, 0.4);
`;

export const MyMarketsItems = styled.div`
  margin: 5.5px 0;
  padding: 5px 11px;
  font-weight: ${(props) => (props.myMarketsItems ? "700" : "500")};
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.myMarketsItems ? "#000" : "#b2b2b2")};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #000;

    transition: 0.2s;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
export const MyPoint = styled.div`
  margin: 5.5px 0;
  padding: 5px 11px;

  font-weight: ${(props) => (props.myPoint ? "700" : "500")};
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.myPoint ? "#000" : "#b2b2b2")};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #000;

    transition: 0.2s;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
export const MyProfile = styled.div`
  margin: 5.5px 0;
  padding: 5px 11px;

  font-weight: ${(props) => (props.myProfile ? "700" : "500")};
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.myProfile ? "#000" : "#b2b2b2")};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: #000;

    transition: 0.2s;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;
