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
  display: flex;
  align-items: center;
`;

export const MyItems = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.myItems ? "#000" : "#828282")};
  border-bottom: ${(props) => props.myItems && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    border-bottom: 2px solid #ffd600;
  }
`;
export const MyPicked = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.myPicked ? "#000" : "#828282")};
  border-bottom: ${(props) => props.myPicked && "2px solid #ffd600"};

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

export const Row5Th = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(3, 1.5fr);
  text-align: center;
`;
export const Row5 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(3, 1.5fr);
  text-align: center;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Row6Th = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(4, 1.5fr);
  text-align: center;
`;
export const Row6 = styled.div`
  width: 980px;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #dbdbdb;

  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(4, 1.5fr);
  text-align: center;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
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
