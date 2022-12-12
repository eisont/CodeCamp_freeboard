import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 282px;
  height: 52px;
  padding: 14px 16px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f2f2f2;
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;

  &:placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #000;
  }
`;
