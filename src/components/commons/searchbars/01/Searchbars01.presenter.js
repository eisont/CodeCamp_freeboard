import { SearchIconsvg } from '../../../../commons/styles/Iconsvg';
import * as S from './Searchbars01.styles';

const Searchbars01UI = (props) => {
  return (
    <S.Searchbar>
      <SearchIconsvg margin='0 11.51px 0 0' width='18' height='18' fill='#000' />
      <S.SearchbarInput placeholder='제품을 검색해 주세요.' onChange={props.onChangeSearchbar} />
    </S.Searchbar>
  );
};

export default Searchbars01UI;
