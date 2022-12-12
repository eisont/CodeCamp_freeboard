// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Search>
        <S.SearchBox>
          <Searchbars01
            refetch={props.refetch}
            refetchBoardsCount={props.refetchBoardsCount}
            onChangeKeyword={props.onChangeKeyword}
          />
        </S.SearchBox>
      </S.Search>

      <S.TableTop>
        <S.Row>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>

        {props.data?.fetchBoards.map((el: any, index: any) => (
          <S.Row key={uuidv4()}>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnTitle onClick={props.onClickMoveToBoardDetail} id={el._id}>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el: any) => (
                  <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.Word>
                ))}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
      </S.TableTop>
      <Paginations01 refetch={props.refetch} count={props.count} />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
