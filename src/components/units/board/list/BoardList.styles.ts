import { EditOutlined, LikeOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  margin: 50px auto;
  text-align: center;
  // background: #f00;
`;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "#000")};
`;
export const BestTitle = styled.div`
  font-weight: 900;
  font-size: 30px;
`;
export const BestBoard = styled.div`
  margin: 5vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BestBoardList = styled.div`
  width: 23%;
  height: 23vh;

  display: flex;
  flex-direction: column;

  border: 2px solid #dbdbdb;
  border-radius: 10px;
`;

export const BestBoardListPhoto = styled.div`
  width: 100%;
  height: 50%;
  background: #f00;
`;
export const BestBoardListTitle = styled.div`
  width: 100%;
  padding: 2vh 0;
  background: #ff0;
`;
export const BestBoardBox = styled.div`
  display: flex;
`;
export const BestInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BestWriter = styled.div`
  display: flex;
  background: blue;
`;
export const BestBoardListProfilePhoto = styled.div``;
export const BestBoardListWriter = styled.div``;
export const BestBoardListCreateAt = styled.div``;
export const BestBoardLikeOutlined = styled(LikeOutlined)`
  font-size: 20px;
`;
export const BestBoardListLike = styled.div`
  // font-size: 20px;
`;

export const Search = styled.div`
  width: 100%;
  height: 5vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchBox = styled.div`
  // background: #f00;

  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchIcon = styled(SearchOutlined)`
  font-size: 30px;
`;
export const Searchbar01 = styled.input`
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  width: 95%;
  padding: 1vh;
  // background: #f0f;
`;

export const SearchDate = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const SearchDateBox = styled.input`
  border-radius: 10px;
  border: 2px solid #dbdbdb;
  width: 70%;
  padding: 1vh;
  // background: #f0f;
`;
export const SearchBt = styled.button`
  padding: 7px;
`;

export const TableTop = styled.div`
  // background: #dbdbdb;
  margin: 3vh 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7vh;
  line-height: 7vh;
  border-bottom: 1px solid gray;

  :hover {
    color: #bdbdbd;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 16px;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  font-size: 16px;

  :hover {
    color: #bdbdbd;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const Button = styled.button`
  width: 20vh;
  height: 7vh;
  font-size: 2vh;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const Paginations01 = styled.div``;
export const PencilIcon = styled(EditOutlined)``;
export const PageList = styled(EditOutlined)``;
