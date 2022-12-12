// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import { LikeIconsvg, Profilesvg } from "../../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";

const BoardListBestBoards = (props: any) => {
  console.log("Best", props.el?.images?.length);

  return (
    <S.BestBoardsBox id={props.el._id} onClick={props.onClickMoveToBoardDetail}>
      {props.el?.images?.length === 0 ? (
        <S.BestNoImgBox>
          <CodeCampLogosvg width="238" height="36" fill="#000" />
        </S.BestNoImgBox>
      ) : (
        <S.BestBoardsImage
          src={`https://storage.googleapis.com/${props.el?.images[0]}}`}
        />
      )}

      <S.ContentsBox>
        <S.BestBoardsTitle>{props.el?.title}</S.BestBoardsTitle>
        <S.UserBox>
          <Profilesvg
            margin="0 6px 0 0"
            width="20"
            height="20"
            fill="#bdbdbd"
          />
          <S.BestBoardsName>{props.el?.writer}</S.BestBoardsName>
        </S.UserBox>
        <S.BestBoardsDate>
          Date: {getDatecomma(props.el?.createdAt)}
        </S.BestBoardsDate>
      </S.ContentsBox>

      <S.BestBoardsLikeBox>
        <LikeIconsvg width="20" height="18" fill="#ffd600" />
        <S.BestBoardsLikeCount>{props.el?.likeCount}</S.BestBoardsLikeCount>
      </S.BestBoardsLikeBox>
    </S.BestBoardsBox>
  );
};

export default BoardListBestBoards;
