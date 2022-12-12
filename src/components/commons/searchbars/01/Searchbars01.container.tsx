import { ChangeEvent } from "react";
import Searchbars01UI from "./Searchbars01.presenter";
import { ISearchbars01Props } from "./Searchbars01.types";
import _ from "lodash";

const Searchbars01 = (props: ISearchbars01Props) => {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
  }, 2000);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
};

export default Searchbars01;
