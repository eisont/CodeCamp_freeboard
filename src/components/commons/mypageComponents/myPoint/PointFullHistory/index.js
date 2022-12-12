import * as S from "../MyPoint.styles";
import { v4 as uuidv4 } from "uuid";
import { getDatecomma } from "../../../../../commons/libraries/utils";
import { PointComma } from "../../../../../commons/libraries/point";
import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

const PointFullHistory = () => {
  const TotalTh = ["날짜", "내용", "거래 및 충전 내역", "잔액"];

  const { data: PointData } = useQuery(FETCH_POINT_TRANSACTIONS);

  return (
    <S.SectionMain>
      <S.Row4>
        {TotalTh.map((el) => (
          <S.Th key={uuidv4()}>{el}</S.Th>
        ))}
      </S.Row4>
      {PointData?.fetchPointTransactions?.map((el) => (
        <S.Row4 key={uuidv4()}>
          <S.Td>{getDatecomma(el?.createdAt)}</S.Td>

          <S.Status Status={el?.status}>{el?.status}</S.Status>
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

export default PointFullHistory;
