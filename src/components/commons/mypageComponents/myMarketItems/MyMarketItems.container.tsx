import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import MyMarketsItemsUI from "./MyMarketItems.presenter";
import {
  FETCHUSED_ITEMS_IPICKED,
  FETCHUSED_ITEMS_ISOLD,
  FETCH_USED_ITEMS_COUNT_IPICKED,
  FETCH_USED_ITEMS_COUNT_ISOLD,
} from "./MyMarketItems.query";

const MyMarketsItems = () => {
  const router = useRouter();

  const [myItems, setMyItems] = useState(true);
  const [myPicked, setMyPicked] = useState(false);

  const onClickMyItems = () => {
    setMyItems(true);
    setMyPicked(false);
  };
  const onClickMyPicked = () => {
    setMyItems(false);
    setMyPicked(true);
  };

  const { data: IsoldData, refetch: ISoldRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCHUSED_ITEMS_ISOLD);

  const { data: soldCountData } = useQuery(FETCH_USED_ITEMS_COUNT_ISOLD);

  const { data: pickData, refetch: IPickedRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCHUSED_ITEMS_IPICKED, { variables: { search: "" } });

  const { data: pickCountData } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);

  const onClickID = (event: any) => {
    router.push(`/markets/${event.currentTarget.id}`);
  };

  return (
    <MyMarketsItemsUI
      myItems={myItems}
      myPicked={myPicked}
      onClickMyItems={onClickMyItems}
      onClickMyPicked={onClickMyPicked}
      IsoldData={IsoldData?.fetchUseditemsISold}
      soldCountData={soldCountData?.fetchUseditemsCountISold}
      ISoldRefetch={ISoldRefetch}
      pickData={pickData?.fetchUseditemsIPicked}
      pickCountData={pickCountData?.fetchUseditemsCountIPicked}
      IPickedRefetch={IPickedRefetch}
      onClickID={onClickID}
    />
  );
};

export default MyMarketsItems;
