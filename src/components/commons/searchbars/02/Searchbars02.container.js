import { useForm } from "react-hook-form";
import Searchbars02UI from "./Searchbars02.presenter";

const Searchbars02 = (pr) => {
  const { register, handleSubmit } = useForm();

  const onClickSearch = (data) => {
    pr.setKeyword(data?.mysearch);
    pr.refetch({
      // startDate: pr.startDate,
      // endDate: pr.endDate,
      search: data?.mysearch,
      page: 1,
    });
  };

  const onChangeStartDate = (event) => {
    pr.setStartDate(event.target.value);
  };
  const onChangeEndDate = (event) => {
    pr.setEndDate(event.target.value);
  };

  return (
    <Searchbars02UI
      register={register}
      handleSubmit={handleSubmit}
      onClickSearch={onClickSearch}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
    />
  );
};

export default Searchbars02;
