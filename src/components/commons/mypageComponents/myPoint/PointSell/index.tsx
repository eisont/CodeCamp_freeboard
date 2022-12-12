import * as S from "../MyPoint.styles";
import { v4 as uuidv4 } from "uuid";
import { getDatecomma } from "../../../../../commons/libraries/utils";
import { PointComma } from "../../../../../commons/libraries/point";
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from "../../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";
import DOMPurify from "dompurify";

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      useditem {
        contents
      }
      amount
      balance
      createdAt
    }
  }
`;

const PointSell = () => {
  const SellTh = ["거래일", "상품명", "거래 내역", "거래 후 잔액"];

  const { data: SellingData } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  return (
    <S.SectionMain>
      <S.Row4>
        {SellTh.map((el: any) => (
          <S.Th key={uuidv4()}>{el}</S.Th>
        ))}
      </S.Row4>

      {SellingData?.fetchPointTransactionsOfSelling?.map((el: any) => (
        <S.Row4 key={uuidv4()}>
          <S.Td>{getDatecomma(el?.createdAt)}</S.Td>

          <S.Td
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(String(el?.useditem?.contents)),
            }}
          />
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

export default PointSell;
