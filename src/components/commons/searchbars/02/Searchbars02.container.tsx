import { useForm } from "react-hook-form";
import Searchbars02UI from "./Searchbars02.presenter";

interface IFormValues {
  search: string;
  mysearch: string;
}

const Searchbars02 = (props: any) => {
  const { register, handleSubmit } = useForm();

  const onClickSearch = (data: IFormValues) => {
    props.setKeyword(data?.mysearch);
    props.refetch({
      startDate: props.startDate,
      endDate: props.endDate,
      search: data?.mysearch,
      page: 1,
    });
  };

  const onChangeStartDate = (event: any) => {
    props.setStartDate(event.target.value);
  };
  const onChangeEndDate = (event: any) => {
    props.setEndDate(event.target.value);
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
