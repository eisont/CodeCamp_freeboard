import styled from "@emotion/styled";

export const ChargeModal = styled.div`
  position: absolute;
  top: 360px;
  right: 50%;
  z-index: 10;

  padding: 40px;
  width: 464px;
  transform: translateX(232px);

  border-radius: 20px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;
export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const IconBox = styled.div`
  margin: 0 auto;
`;
export const ModalText = styled.div`
  margin: 40px 0;

  font-weight: 700;
  font-size: 20px;

  color: #000;
`;
export const SelectedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #000;
  color: #828282;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const Text = styled.div`
  padding: 14px 8px;
  font-weight: 400;
  font-size: 16px;
`;
export const Bold = styled.div`
  font-weight: 700;
  color: #000;
`;
export const SelectBox = styled.div`
  margin: 10px 0 0 0;
  width: 384px;
  height: 212px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  padding: 0 0 0 16px;
  width: 100%;
  height: 52px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  color: #e0e0e0;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
export const ChargeBt = styled.div`
  margin: 40px 0 0 0;
  width: 384px;
  height: 52px;
  background: ${(props: any) => (props.chargePrice === 0 ? "#bdbdbd" : "#000")};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: ${(props: any) =>
      props.chargePrice === 0 ? "default" : "pointer"};
  }
`;
