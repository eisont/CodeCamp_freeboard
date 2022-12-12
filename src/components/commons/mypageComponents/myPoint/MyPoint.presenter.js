import * as S from "./MyPoint.styles";
import PointFullHistory from "./PointFullHistory";
import PointCharge from "./PointCharge";
import PointBuy from "./PointBuy";
import PointSell from "./PointSell";

const MyPointUI = (pr) => {
  return (
    <S.Section>
      <S.SectionHead>
        <S.MenuBox>
          <S.Total onClick={pr.onClickTotal} total={pr.total}>
            전체내역
          </S.Total>
          <S.Hrs />
          <S.Charge onClick={pr.onClickCharge} charge={pr.charge}>
            충전내역
          </S.Charge>
          <S.Hrs />
          <S.Buy onClick={pr.onClickBuy} buy={pr.buy}>
            구매내역
          </S.Buy>
          <S.Hrs />
          <S.Sell onClick={pr.onClickSell} sell={pr.sell}>
            판매내역
          </S.Sell>
        </S.MenuBox>
        {/* <Searchbars01 /> 검색이 됩니다. */}
      </S.SectionHead>

      {pr.total && <PointFullHistory />}

      {pr.charge && <PointCharge />}

      {pr.buy && <PointBuy />}

      {pr.sell && <PointSell />}
    </S.Section>
  );
};

export default MyPointUI;
