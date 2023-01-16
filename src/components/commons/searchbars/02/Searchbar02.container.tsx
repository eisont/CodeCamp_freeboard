import Searchbar02UI from "./Searchbar02.presenter";
import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { IPropsCon, SearchType } from "./Searchbar02.types";

const Searchbar02 = (props: IPropsCon) => {
  const { register, handleSubmit } = useForm();

  const onClickSearch = (data: SearchType) => {
    props.setKeyword(String(data?.mysearch));
    props.refetchBoards({
      search: String(data?.mysearch),
      page: 1,
    });
  };

  const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    props.setStartDate(event.target.value);
  };
  const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    props.setEndDate(event.target.value);
  };

  return (
    <Searchbar02UI
      register={register}
      handleSubmit={handleSubmit}
      onClickSearch={onClickSearch}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
    />
  );
};

export default Searchbar02;
