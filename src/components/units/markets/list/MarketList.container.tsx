// 중고마켓 목록 container

import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_OF_THE_BEST,
  FETCH_USED_ITEMS,
} from "./MarketList.queries";
import { useRouter } from "next/router";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../../commons/store";

const MarketList = () => {
  const router = useRouter();

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [, setWatchProduct] = useRecoilState(WatchProductState);

  const {
    data: MarketsItemsData,
    refetch,
    fetchMore,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS
  );

  const { data: MarketsItemsSoldoutData } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: true,
    },
  });

  const { data: BestProduct } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const onClicksoldoutItems = () => {
    setIsSoldOut(true);
  };
  const onClickItems = () => {
    setIsSoldOut(false);
  };

  const onClickMoveToMarketDetail =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      const watch = JSON.parse(localStorage.getItem("watch") || "[]");
      const { __typename, ...newEl } = el;
      watch.unshift(newEl);
      localStorage.setItem("watch", JSON.stringify(watch));
      const removeid = _.uniqBy(watch, "_id");
      const result = removeid.slice(0, 3);
      setWatchProduct(result);

      if (event.target instanceof Element) console.log(event?.target.id);
      router.push(`/markets/${event.target.id}`);
    };

  const onClickTest = (event: any) => {
    router.push(`/markets/${event.target.id}`);
  };

  const onLoadMore = () => {
    if (!MarketsItemsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(MarketsItemsData?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditemQuestions: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            // 이전 뎃글 보여줘
            ...prev.fetchUseditems,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveToMarketNew = () => {
    router.push("/markets/new");
  };

  return (
    <MarketListUI
      onClickItems={onClickItems}
      onClicksoldoutItems={onClicksoldoutItems}
      isSoldOut={isSoldOut}
      MarketsItemsSoldoutData={MarketsItemsSoldoutData?.fetchUseditems}
      MarketsItemsData={MarketsItemsData?.fetchUseditems}
      refetch={refetch}
      BestProduct={BestProduct}
      onLoadMore={onLoadMore}
      onClickTest={onClickTest}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      onClickMoveToMarketNew={onClickMoveToMarketNew}
    />
  );
};

export default MarketList;
