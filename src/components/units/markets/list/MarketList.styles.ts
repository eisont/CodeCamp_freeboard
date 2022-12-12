// 중고마켓 목록 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto 377px auto;
  width: 100%;
`;

// Best Box
export const BestBox = styled.div`
  margin: 80px auto;

  width: 1200px;
  height: 473px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const BestText = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #000;
`;
export const BestProduct = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Best Product
export const BestProductBox = styled.div`
  position: relative;
  padding: 20px;
  width: 282px;
  height: 391px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transform: translate(-2px, -2px);
  }
`;
export const BestProductImage = styled.img`
  width: 242px;
  height: 242px;
  object-fit: contain;
`;
export const BestProductName = styled.div`
  padding: 20px 0 4px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
export const BestProductRemark = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  color: #4f4f4f;
`;
export const BestProductPrice = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #000;
`;
export const BestProductLikeBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 24px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestProductLikeCount = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

// Section Box
export const SearchBox = styled.div`
  margin: 0 auto;

  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu = styled.div`
  margin: 0 20px 0 0;
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;
  border-bottom: ${(props) => !props.isSoldOut && "2px solid #ffd600"};

  &:hover {
    cursor: pointer;
    color: #000;
    font-weight: 500;
    border-bottom: 2px solid #ffd600;
  }
`;
export const SoldOutMenu = styled.div`
  margin: 0 20px 0 0;
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;
  border-bottom: ${(props) => (props.isSoldOut ? "2px solid #ffd600" : "")};

  &:hover {
    cursor: pointer;
    color: #000;
    font-weight: 500;
    border-bottom: 2px solid #ffd600;
  }
`;

export const MainBox = styled.div`
  position: relative;
  margin: 40px auto;
  width: 1442px;
  transform: translateX(121px);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const InfiniteScrollBox = styled.div`
  width: 1226px;
  height: 1004px;

  display: flex;
  justify-content: space-between;

  overflow: hidden;
  overflow-y: scroll;

  // 스크롤 바 스타일링
  &::-webkit-scrollbar {
    width: 6px;
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffd600;
    border-radius: 4px;
  }
`;
export const WatchProductBox = styled.div`
  position: absolute;
  right: 0px;
  /*z-index: 10; */
`;

export const JustifyBox = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WriteItem = styled.div`
  width: 124px;
  height: 52px;

  color: #000;
  font-weight: 500;
  font-size: 16px;

  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f2f2f2;
  border-radius: 10px;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border: 1px solid #000;
    font-weight: 600;
    background: #ffd600;
  }
`;

// infiniteScroll part
export const Row = styled.div`
  padding: 20px 0;
  width: 1200px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;

export const FlexOutBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  height: 160px;
  width: 160px;
  object-fit: contain;
`;

export const ColumnBox = styled.div`
  margin: 0 0 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #000;
`;
export const Remarks = styled.div`
  margin: 4px 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
`;
export const ColumnTags = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
`;

export const SellerIcon = styled.img`
  margin: 0 6px 0 0;
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
export const Seller = styled.div`
  margin-right: 22px;
  font-size: 16px;
  font-weight: 700;
  color: #4f4f4f;
`;
export const Pick = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const FlexPrice = styled.div`
  font-weight: 900;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #000;
`;
