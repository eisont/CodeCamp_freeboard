import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

export const BestText = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  color: #000;
`;
export const BestBoards = styled.div`
  width: 1200px;
  height: 339px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BestBoardsBox = styled.div`
  position: relative;
  width: 282px;
  height: 257px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translate(-2px, -2px);
  }
`;

export const BestNoImgBox = styled.div`
  width: 282px;
  height: 120px;

  background: #dbdbdb;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BestBoardsImage = styled.img`
  width: 282px;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
`;
export const ContentsBox = styled.div`
  padding: 20px;
`;
export const BestBoardsTitle = styled.div`
  padding: 0 0 20px 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
export const UserBox = styled.div`
  padding: 0 0 8px 0;
  display: flex;
  align-items: center;
`;
export const BestBoardsName = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;
export const BestBoardsDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #828282;
`;

export const BestBoardsLikeBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 24px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestBoardsLikeCount = styled.div`
  padding: 4.65px;
  font-weight: 400;
  font-size: 16px;
  color: #000;
`;

export const SectionBox = styled.div`
  width: 1200px;
`;
interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "#000")};
`;

export const SearchBox = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TableTop = styled.div`
  margin: 40px 0;

  border: 1px solid #000;
  border-left: none;
  border-right: none;
`;

export const Grid = styled.div`
  width: 100%;
  line-height: 52px;
  display: grid;
  grid-template-rows: 52px;
  grid-template-columns: 1fr 8fr repeat(2, 2fr);
  text-align: center;
  border-bottom: 1px solid #bdbdbd;

  &:hover {
    border-bottom: 2px solid #ffd600;
  }
`;

export const HText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;

export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #4f4f4f;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: #000;
  }
`;

export const Footer = styled.div`
  position: relative;
  width: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  position: absolute;
  right: 0;

  width: 171px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  border: 1px solid #f2f2f2;
  background: #fff;
  transition: 0.2s;

  &:hover {
    font-weight: 600;
    border: 1px solid #000;

    cursor: pointer;
    background: #ffd600;
  }
`;
