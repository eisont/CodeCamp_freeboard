// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import MarketListUIItem from "./MarketList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import MarketListBestProduct from "./MarketList.presenterBestProduct";
import WatchProduct from "../../../commons/WatchProduct/WatchProduct.container";

const MarketListUI = (pr) => {
  if (!pr.MarketsItemsData) return <div />;

  return (
    <S.Wrapper>
      <S.BestBox>
        <S.BestText>베스트 상품</S.BestText>
        <S.BestProduct>
          {pr.BestProduct?.fetchUseditemsOfTheBest.map((el) => (
            <MarketListBestProduct
              key={uuidv4()}
              el={el}
              onClickMoveToMarketDetail={pr.onClickMoveToMarketDetail}
            />
          ))}
        </S.BestProduct>
      </S.BestBox>

      <S.SearchBox>
        <S.MenuBox>
          <S.Menu onClick={pr.onClickItems} isSoldOut={pr.isSoldOut}>
            판매중 상품
          </S.Menu>
          <S.SoldOutMenu
            onClick={pr.onClicksoldoutItems}
            isSoldOut={pr.isSoldOut}
          >
            판매된 상품
          </S.SoldOutMenu>
        </S.MenuBox>
        <Searchbars01 refetch={pr.refetch} />
      </S.SearchBox>

      <S.MainBox>
        <S.InfiniteScrollBox>
          <InfiniteScroll pageStart={0} loadMore={pr.onLoadMore} hasMore={true}>
            {pr.isSoldOut ? (
              // 판매된 상품
              <>
                {pr.MarketsItemsSoldoutData?.map((el) => (
                  <MarketListUIItem
                    key={el._id}
                    el={el}
                    onClickMoveToMarketDetail={pr.onClickMoveToMarketDetail}
                  />
                ))}
              </>
            ) : (
              // 판매중 상품
              <>
                {pr.MarketsItemsData?.map((el) => (
                  <MarketListUIItem
                    key={el._id}
                    el={el}
                    onClickMoveToMarketDetail={pr.onClickMoveToMarketDetail}
                  />
                ))}
              </>
            )}
          </InfiniteScroll>
        </S.InfiniteScrollBox>

        <S.WatchProductBox>
          <WatchProduct />
        </S.WatchProductBox>
      </S.MainBox>

      <S.JustifyBox>
        <S.WriteItem onClick={pr.onClickMoveToMarketNew}>
          상품 등록하기
        </S.WriteItem>
      </S.JustifyBox>
    </S.Wrapper>
  );
};

export default MarketListUI;
