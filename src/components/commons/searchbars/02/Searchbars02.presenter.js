import * as S from "./Searchbars02.styles";

const Searchbars02UI = (pr) => {
  return (
    <S.Wrapper onSubmit={pr.handleSubmit(pr.onClickSearch)}>
      <S.Searchbar>
        <S.SearchIcon />
        <S.SearchbarInput
          placeholder="제목을 검색해주세요."
          {...pr.register("mysearch")}
        />
      </S.Searchbar>

      <S.SearchDate
        type="date"
        placeholder="YY.MM.DD"
        onChange={pr.onChangeStartDate}
      />
      <S.SearchDate
        type="date"
        placeholder="YY.MM.DD"
        onChange={pr.onChangeEndDate}
      />
      <S.SearchBt>검색하기</S.SearchBt>
    </S.Wrapper>
  );
};

export default Searchbars02UI;
