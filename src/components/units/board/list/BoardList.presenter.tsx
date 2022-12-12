// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";
import BoardListBestBoards from "./BoardList.presenterBestBoards";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import { PencilFillsvg } from "../../../../commons/styles/Iconsvg";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.BestText>베스트 게시글</S.BestText>
      <S.BestBoards>
        {props.BestBoards?.map((el) => (
          <BoardListBestBoards
            key={uuidv4()}
            el={el}
            onClickMoveToBoardDetail={props.onClickMoveToBoardDetail}
          />
        ))}
      </S.BestBoards>

      <S.SectionBox>
        <S.SearchBox>
          <Searchbars02
            refetch={props.refetch}
            setKeyword={props.setKeyword}
            startDate={props.startDate}
            setStartDate={props.setStartDate}
            onChangeStartDate={props.onChangeStartDate}
            endDate={props.endDate}
            setEndDate={props.setEndDate}
            onChangeEndDate={props.onChangeEndDate}
          />
        </S.SearchBox>

        <S.TableTop>
          <S.Grid>
            <S.HText>번호</S.HText>
            <S.HText>제목</S.HText>
            <S.HText>작성자</S.HText>
            <S.HText>날짜</S.HText>
          </S.Grid>

          {props.data?.fetchBoards.map((el: any, index: any) => (
            <S.Grid key={uuidv4()}>
              <S.Text>{index + 1}</S.Text>
              <S.Title onClick={props.onClickMoveToBoardDetail} id={el._id}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((el: any) => (
                    <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                      {el}
                    </S.Word>
                  ))}
              </S.Title>
              <S.Text>{el.writer}</S.Text>
              <S.Text>{getDatecomma(el.createdAt)}</S.Text>
            </S.Grid>
          ))}
        </S.TableTop>

        <S.Footer>
          <Paginations01 count={props.count} refetch={props.refetch} />
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <PencilFillsvg
              margin="0 11px 0 0"
              width="18"
              height="18"
              fill="#000"
            />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.SectionBox>
    </S.Wrapper>
  );
}
