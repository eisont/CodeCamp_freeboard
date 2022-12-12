import Searchbars01UI from './Searchbars01.presenter';
import _ from 'lodash';

const Searchbars01 = (props) => {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
  }, 2000);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
};

export default Searchbars01;
