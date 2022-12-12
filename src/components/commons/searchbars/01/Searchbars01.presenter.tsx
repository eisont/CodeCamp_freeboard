import { SearchIconsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./Searchbars01.styles";
import { ISearchbars01UIProps } from "./Searchbars01.types";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <S.Searchbar>
      <SearchIconsvg
        margin="0 11.51px 0 0"
        width="18"
        height="18"
        fill="#000"
      />
      <S.SearchbarInput
        placeholder="제품을 검색해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </S.Searchbar>
  );
}
