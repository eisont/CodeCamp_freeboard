// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import MarketListUIItem from "./MarketList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import MarketListBestProduct from "./MarketList.presenterBestProduct";
import WatchProduct from "../../../commons/WatchProduct/WatchProduct.container";

export default function MarketListUI(props: IMarketListUIProps) {
  if (!props.MarketsItemsData) return <div />;
  return (
    <S.Wrapper>
      <S.BestBox>
        <S.BestText>베스트 상품</S.BestText>
        <S.BestProduct>
          {props.BestProduct?.fetchUseditemsOfTheBest.map((el) => (
            <MarketListBestProduct
              key={uuidv4()}
              el={el}
              onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
            />
          ))}
        </S.BestProduct>
      </S.BestBox>

      <S.SearchBox>
        <S.MenuBox>
          <S.Menu onClick={props.onClickItems} isSoldOut={props.isSoldOut}>
            판매중 상품
          </S.Menu>
          <S.SoldOutMenu
            onClick={props.onClicksoldoutItems}
            isSoldOut={props.isSoldOut}
          >
            판매된 상품
          </S.SoldOutMenu>
        </S.MenuBox>
        <Searchbars01 refetch={props.refetch} />
      </S.SearchBox>

      <S.MainBox>
        <S.InfiniteScrollBox>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
          >
            {props.isSoldOut ? (
              // 판매된 상품
              <>
                {props.MarketsItemsSoldoutData?.map((el: any) => (
                  <MarketListUIItem
                    key={el._id}
                    el={el}
                    onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
                  />
                ))}
              </>
            ) : (
              // 판매중 상품
              <>
                {props.MarketsItemsData?.map((el: any) => (
                  <MarketListUIItem
                    key={el._id}
                    el={el}
                    onClickMoveToMarketDetail={props.onClickMoveToMarketDetail}
                  />
                ))}
              </>
            )}

            {/* } */}
          </InfiniteScroll>
        </S.InfiniteScrollBox>

        <S.WatchProductBox>
          <WatchProduct />
        </S.WatchProductBox>
      </S.MainBox>

      <S.JustifyBox>
        <S.WriteItem onClick={props.onClickMoveToMarketNew}>
          상품 등록하기
        </S.WriteItem>
      </S.JustifyBox>
    </S.Wrapper>
  );
}
