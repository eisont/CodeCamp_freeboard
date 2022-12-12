// 중고마켓 목록 container

import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useRouter } from "next/router";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../../commons/store";

export default function MarketList() {
  const [, setWatchProduct] = useRecoilState(WatchProductState);
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickMoveToMarketDetail =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      const watch = JSON.parse(localStorage.getItem("watch") || "[]");
      const { __typename, ...newEl } = el;
      watch.unshift(newEl);
      localStorage.setItem("watch", JSON.stringify(watch));
      const removeid = _.uniqBy(watch, "_id");
      const result = removeid.slice(0, 3);
      setWatchProduct(result);
      if (event.target instanceof Element)
        router.push(`/markets/${event.target.id}`);
    };
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
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

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      refetch={refetch}
      // refetchUseditemsCount={refetchUseditemsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
