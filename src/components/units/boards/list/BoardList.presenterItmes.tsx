// 게시판 목록 presenter

import * as S from "./BoardList.style";
import { getDateComma } from "../../../../commons/libraries/utiles";
import { IPropsPreItem } from "./BoardList.types";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

const BoardListItem = (pr: IPropsPreItem) => {
  const router = useRouter();

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <S.Grid>
      <S.Text>{pr.index + 1}</S.Text>
      <S.Title onClick={onClickMoveToBoardDetail} id={pr.el._id}>
        {pr.el.title
          ?.replaceAll(String(pr.keyword), `^#$%${pr.keyword}^#$%`)
          .split("^#$%")
          .map((el: any) => (
            <S.Word key={uuidv4()} isMatched={pr.keyword === el}>
              {el}
            </S.Word>
          ))}
      </S.Title>
      <S.Text>{pr.el.writer}</S.Text>
      <S.Text>{getDateComma(pr.el.createdAt)}</S.Text>
    </S.Grid>
  );
};

export default BoardListItem;
