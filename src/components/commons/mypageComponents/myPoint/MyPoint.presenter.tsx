import * as S from "./MyPoint.style";
import PointFullHistory from "./PointFullHistory";
import PointCharge from "./PointCharge";
import PointBuy from "./PointBuy";
import PointSell from "./PointSell";

const MyPointUI = (props: any) => {
  return (
    <S.Section>
      <S.SectionHead>
        <S.MenuBox>
          <S.Total onClick={props.onClickTotal} total={props.total}>
            전체내역
          </S.Total>
          <S.Hrs />
          <S.Charge onClick={props.onClickCharge} charge={props.charge}>
            충전내역
          </S.Charge>
          <S.Hrs />
          <S.Buy onClick={props.onClickBuy} buy={props.buy}>
            구매내역
          </S.Buy>
          <S.Hrs />
          <S.Sell onClick={props.onClickSell} sell={props.sell}>
            판매내역
          </S.Sell>
        </S.MenuBox>
        {/* <Searchbars01 /> 검색이 됩니다. */}
      </S.SectionHead>

      {props.total && <PointFullHistory />}

      {props.charge && <PointCharge />}

      {props.buy && <PointBuy />}

      {props.sell && <PointSell />}
    </S.Section>
  );
};

export default MyPointUI;
