import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Searchbar = styled.div`
  width: 700px;
  height: 52px;
  border-radius: 15px;
  padding: 14px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f2f2f2;
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: 17.49px;
  margin: 0 11.51px 0 0;
  :hover {
    cursor: pointer;
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;

  :placeholder {
    color: #000;
  }
`;

export const SearchDate = styled.input`
  border: 1px solid #dbdbdb;
  padding: 20px;

  width: 190px;
  height: 52px;
`;

export const SearchBt = styled.button`
  width: 94px;
  height: 52px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;

  transition: 0.2s;
  &:hover {
    font-weight: 600;
    cursor: pointer;
    background: #ffd600;
    color: #000;
  }
`;
