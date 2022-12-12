import { useForm } from 'react-hook-form';
import Searchbars02UI from './Searchbars02.presenter';

const Searchbars02 = (props) => {
  const { register, handleSubmit } = useForm();

  const onClickSearch = (data) => {
    props.setKeyword(data?.mysearch);
    props.refetch({
      // startDate: props.startDate,
      // endDate: props.endDate,
      search: data?.mysearch,
      page: 1,
    });
  };

  const onChangeStartDate = (event) => {
    props.setStartDate(event.target.value);
  };
  const onChangeEndDate = (event) => {
    props.setEndDate(event.target.value);
  };

  return <Searchbars02UI register={register} handleSubmit={handleSubmit} onClickSearch={onClickSearch} onChangeStartDate={onChangeStartDate} onChangeEndDate={onChangeEndDate} />;
};

export default Searchbars02;
