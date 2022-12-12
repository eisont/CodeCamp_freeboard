import * as S from "./Searchbars02.styles";
import { ISearchbars02UIProps } from "./Searchbars02.types";

const Searchbars02UI = (props: ISearchbars02UIProps) => {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSearch)}>
      <S.Searchbar>
        <S.SearchIcon />
        <S.SearchbarInput
          placeholder="제목을 검색해주세요."
          {...props.register("mysearch")}
        />
      </S.Searchbar>

      <S.SearchDate
        type="date"
        placeholder="YY.MM.DD"
        onChange={props.onChangeStartDate}
      />
      <S.SearchDate
        type="date"
        placeholder="YY.MM.DD"
        onChange={props.onChangeEndDate}
      />
      <S.SearchBt>검색하기</S.SearchBt>
    </S.Wrapper>
  );
};
export default Searchbars02UI;
