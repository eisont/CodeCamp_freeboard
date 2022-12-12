// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { IMarketListUIProps } from "./MarketList.types";
import InfiniteScroll from "react-infinite-scroller";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function MarketListUI(props: IMarketListUIProps) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchBox>
          <Searchbars01
            refetch={props.refetch}
            // refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchBox>

        <S.SearchDate>
          <S.SearchDateBox placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />

          {/* <S.SearchBt onClick={props.onClickSearch}>검색</S.SearchBt> */}
        </S.SearchDate>
      </S.Search>
      <S.TableTop>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems.map((el: any) => (
            <S.Row key={el._id}>
              <S.BigBox>
                <S.FlexImages>
                  <S.Image
                    id={el._id}
                    onClick={props.onClickMoveToMarketDetail(el)}
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
                    }
                  />
                </S.FlexImages>

                <S.ColumnBox>
                  <S.ColumnName>{el.name}</S.ColumnName>
                  <S.ColumnRemarks>{el.remarks} </S.ColumnRemarks>
                  <S.ColumnTags> {el.tags} </S.ColumnTags>

                  <S.FlexBox>
                    <S.FlexUserpicture>
                      {" "}
                      {el?.seller?.picture}{" "}
                    </S.FlexUserpicture>
                    <S.FlexUser> {el?.seller?.name} </S.FlexUser>
                    <S.FlexPickIcon />
                    <S.FlexPick> {el?.pickedCount} </S.FlexPick>
                  </S.FlexBox>
                </S.ColumnBox>
              </S.BigBox>
              <S.FlexPrice>
                <S.Dollar />
                {el.price}원
              </S.FlexPrice>
            </S.Row>
          ))}
        </InfiniteScroll>
      </S.TableTop>
    </S.Wrapper>
  );
}
