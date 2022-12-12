// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import Searchbars02 from "../../../commons/searchbars/02/Searchbars02.container";
import BoardListBestBoards from "./BoardList.presenterBestBoards";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import { PencilFillsvg } from "../../../../commons/styles/Iconsvg";

const BoardListUI = (pr) => {
  return (
    <S.Wrapper>
      <S.BestText>베스트 게시글</S.BestText>
      <S.BestBoards>
        {pr.BestBoards?.map((el) => (
          <BoardListBestBoards
            key={uuidv4()}
            el={el}
            onClickMoveToBoardDetail={pr.onClickMoveToBoardDetail}
          />
        ))}
      </S.BestBoards>

      <S.SectionBox>
        <S.SearchBox>
          <Searchbars02
            refetch={pr.refetch}
            setKeyword={pr.setKeyword}
            startDate={pr.startDate}
            setStartDate={pr.setStartDate}
            onChangeStartDate={pr.onChangeStartDate}
            endDate={pr.endDate}
            setEndDate={pr.setEndDate}
            onChangeEndDate={pr.onChangeEndDate}
          />
        </S.SearchBox>

        <S.TableTop>
          <S.Grid>
            <S.HText>번호</S.HText>
            <S.HText>제목</S.HText>
            <S.HText>작성자</S.HText>
            <S.HText>날짜</S.HText>
          </S.Grid>

          {pr.fetchBoardsData?.fetchBoards.map((el, index) => (
            <S.Grid key={uuidv4()}>
              <S.Text>{index + 1}</S.Text>
              <S.Title onClick={pr.onClickMoveToBoardDetail} id={el._id}>
                {el.title
                  .replaceAll(pr.keyword, `#$%${pr.keyword}#$%`)
                  .split("#$%")
                  .map((el) => (
                    <S.Word key={uuidv4()} isMatched={pr.keyword === el}>
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
          <Paginations01 count={pr.count} refetch={pr.refetch} />
          <S.Button onClick={pr.onClickMoveToBoardNew}>
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
};

export default BoardListUI;
