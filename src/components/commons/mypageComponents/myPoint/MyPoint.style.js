import styled from "@emotion/styled";

export const Section = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionHead = styled.div`
  width: 100%;
  padding: 0 0 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuBox = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`;
export const Total = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.total ? "#000" : "#828282")};
  border-bottom: ${(props) => props.total && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 2px solid #ffd600;
  }
`;
export const Charge = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.charge ? "#000" : "#828282")};
  border-bottom: ${(props) => props.charge && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 2px solid #ffd600;
  }
`;
export const Buy = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.buy ? "#000" : "#828282")};
  border-bottom: ${(props) => props.buy && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 2px solid #ffd600;
  }
`;
export const Sell = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.sell ? "#000" : "#828282")};
  border-bottom: ${(props) => props.sell && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 2px solid #ffd600;
  }
`;

export const Hrs = styled.div`
  margin: 0 12px;
  width: 1px;
  height: 16px;
  background: #bdbdbd;
`;

export const SectionMain = styled.div`
  width: 100%;

  border: 1px solid #000;
  border-right: none;
  border-left: none;
  display: flex;
  flex-direction: column;
`;

export const Row4 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 3fr repeat(2, 1.6fr);
  text-align: center;
`;

export const Row5 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 4fr repeat(3, 1.5fr);
  text-align: center;
`;

export const Th = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;

export const Td = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;

export const Status = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) =>
    props.Status === "구매"
      ? "#0031E0"
      : props.Status === "판매"
      ? "#f00"
      : "#ffd600"};
`;

export const Amount = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${(props) =>
    props.Amount.split("")[0] !== "-" ? "#ffd600" : "#0031E0"};
`;

export const Balance = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #4f4f4f;
`;
