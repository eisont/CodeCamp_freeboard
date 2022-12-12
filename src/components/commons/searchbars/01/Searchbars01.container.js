import Searchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";

const Searchbars01 = (pr) => {
  const getDebounce = _.debounce((data) => {
    pr.refetch({ search: data, page: 1 });
  }, 2000);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
};

export default Searchbars01;
