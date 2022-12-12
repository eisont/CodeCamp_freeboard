// 중고마켓 목록 styles

import {
  UploadOutlined,
  LikeOutlined,
  SearchOutlined,
  DollarCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 90%;
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
  overflow: hidden;
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
`;
export const SearchBt = styled.button`
  padding: 7px;
`;

export const TableTop = styled.div`
  margin: 3vh 0;
  width: 100%;
  flex-direction: row;
`;

export const Row = styled.div`
  width: 100%;
  height: 200px;
  margin: 1% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #000;
`;
export const BigBox = styled.div`
  display: flex;
`;
export const FlexImages = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  height: 160px;
  width: 160px;
  object-fit: contain;
  cursor: pointer;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const ColumnName = styled.div`
  overflow: hidden;
  text-align: center;
  cursor: default;
  font-size: 24px;
  font-weight: 900;
`;
export const ColumnRemarks = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const ColumnTags = styled.div`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 700;
  color: #bdbdbd;
`;
export const FlexBox = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;
export const FlexUserpicture = styled.div`
  margin-right: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #dbdbdb;
`;
export const FlexUser = styled.div`
  margin-right: 22px;
  font-size: 16px;
  font-weight: 700;
`;
export const FlexPickIcon = styled(HeartOutlined)`
  margin-right: 6px;
  font-size: 16px;
  color: #ffd600;
`;
export const FlexPick = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const FlexPrice = styled.div`
  font-weight: 900;
  font-size: 24px;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  font-size: 16px;
`;
export const Dollar = styled(DollarCircleOutlined)`
  font-size: 24px;
  color: #ffd600;
  margin-right: 11px;
`;
