import * as S from "../MyPoint.styles";
import { v4 as uuidv4 } from "uuid";
import { getDatecomma } from "../../../../../commons/libraries/utils";
import { PointComma } from "../../../../../commons/libraries/point";
import { gql, useQuery } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      amount
      balance
      useditem {
        name
        buyer {
          _id
        }
      }
      createdAt
    }
  }
`;

const PointBuy = () => {
  const BuyTh = ["거래일", "상품명", "거래 내역", "거래 후 잔액", "판매자"];

  const { data: BuyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return (
    <S.SectionMain>
      <S.Row5>
        {BuyTh.map((el) => (
          <S.Th key={uuidv4()}>{el}</S.Th>
        ))}
      </S.Row5>

      {BuyingData?.fetchPointTransactionsOfBuying?.map((el) => (
        <S.Row5 key={uuidv4()}>
          <S.Td>{getDatecomma(el?.createdAt)}</S.Td>

          <S.Td>{el?.useditem?.name}</S.Td>
          <S.Amount Amount={String(el?.amount)}>
            {`${el?.amount}`.split("")[0] !== "-"
              ? `+${PointComma(el?.amount)}`
              : PointComma(el?.amount)}
          </S.Amount>
          <S.Balance>￦ {PointComma(el?.balance)}</S.Balance>
          <S.Td>
            {el?.useditem?.buyer?.name ? el?.useditem?.buyer?.name : "판매자"}
          </S.Td>
        </S.Row5>
      ))}
    </S.SectionMain>
  );
};

export default PointBuy;
