import * as S from "../MyPoint.style";
import { v4 as uuidv4 } from "uuid";
import { getDatecomma } from "../../../../../commons/libraries/utils";
import { PointComma } from "../../../../../commons/libraries/point";
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from "../../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
    }
  }
`;

const PointCharge = () => {
  const ChargeTh = ["충전일", "결제 ID", "충전 내역", "충전 후 잔액"];

  const { data: LoadingData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return (
    <S.SectionMain>
      <S.Row4>
        {ChargeTh.map((el: any) => (
          <S.Th key={uuidv4()}>{el}</S.Th>
        ))}
      </S.Row4>

      {LoadingData?.fetchPointTransactionsOfLoading?.map((el: any) => (
        <S.Row4 key={uuidv4()}>
          <S.Td>{getDatecomma(el?.createdAt)}</S.Td>

          <S.Td>{el?.impUid}</S.Td>
          <S.Amount Amount={String(el?.amount)}>
            {`${el?.amount}`.split("")[0] !== "-"
              ? `+${PointComma(el?.amount)}`
              : PointComma(el?.amount)}
          </S.Amount>
          <S.Balance>￦ {PointComma(el?.balance)}</S.Balance>
        </S.Row4>
      ))}
    </S.SectionMain>
  );
};

export default PointCharge;
