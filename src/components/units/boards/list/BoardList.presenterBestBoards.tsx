// 게시판 목록 presenter
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { getDateComma } from "../../../../commons/libraries/utiles";
import { LikeIconsvg, Profilesvg } from "../../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";
import BestBoardCarousel from "../../../commons/carousel";
import * as S from "./BoardList.style";
import { IPropsBestBoards } from "./BoardList.types";

const BoardListBestBoards = (props: IPropsBestBoards) => {
  const router = useRouter();

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <S.BestBoardsBox id={props.el._id} onClick={onClickMoveToBoardDetail}>
      {props.el?.images?.length === 0 ? (
        <S.BestNoImgBox>
          <CodeCampLogosvg width="238" height="36" fill="#000" />
        </S.BestNoImgBox>
      ) : (
        <BestBoardCarousel images={props.el.images} />
      )}

      <S.ContentsBox>
        <S.BestBoardsTitle> {props.el?.title}</S.BestBoardsTitle>
        <S.UserBox>
          <Profilesvg
            margin="0 6px 0 0"
            width="20"
            height="20"
            fill="#dbdbdb"
          />
          <S.BestBoardsName>{props.el.writer}</S.BestBoardsName>
        </S.UserBox>
        <S.BestBoardsDate>
          Date: {getDateComma(props.el?.createdAt)}
        </S.BestBoardsDate>
      </S.ContentsBox>

      <S.BestBoardsLikeBox>
        <LikeIconsvg width="20" height="18" fill="#ffd600" />

        <S.BestBoardsLikeCount>{props.el.likeCount}</S.BestBoardsLikeCount>
      </S.BestBoardsLikeBox>
    </S.BestBoardsBox>
  );
};

export default BoardListBestBoards;
