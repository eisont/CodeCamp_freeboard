import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 10px 20px;
  width: 196px;

  /* position: fixed;
  right: 118px;
  top: 257px;
  z-index: 1; */

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  background: #fff;
`;

export const Text = styled.div`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 900;
`;

export const BestWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 156px;
  height: 199px;

  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const PickCount = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Num = styled.div`
  font-weight: 500;
  font-size: 12px;

  color: #000;
`;

export const Image = styled.img`
  margin: 2px auto 12px auto;
  width: 60px;
  height: 60px;
  object-fit: contain;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 17.76px;
  color: #000;
`;
export const Remarks = styled.div`
  margin: 0 0 4px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 17.76px;
  color: #4f4f4f;
`;
export const Price = styled.div`
  margin: 0 0 8px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 23.68px;
  color: #000;
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
`;
export const Tag = styled.div`
  margin: 0 5px 0 0;
  font-weight: 500;
  font-size: 10px;
  line-height: 14.8px;
  color: #bdbdbd;
`;
