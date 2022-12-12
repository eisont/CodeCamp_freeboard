// 게시판 목록 presenter

import * as S from "./BoardList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import { LikeIconsvg, Profilesvg } from "../../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";
import BestBoardCarousel from "../../../commons/carousel/BestBoardCarousel";

const BoardListBestBoards = (pr) => {
  return (
    <S.BestBoardsBox id={pr.el._id} onClick={pr.onClickMoveToBoardDetail}>
      {pr.el?.images?.length === 0 ? (
        <S.BestNoImgBox>
          <CodeCampLogosvg width="238" height="36" fill="#000" />
        </S.BestNoImgBox>
      ) : (
        <BestBoardCarousel data={pr.el.images} />
      )}

      <S.ContentsBox>
        <S.BestBoardsTitle>{pr.el?.title}</S.BestBoardsTitle>
        <S.UserBox>
          <Profilesvg
            margin="0 6px 0 0"
            width="20"
            height="20"
            fill="#bdbdbd"
          />
          <S.BestBoardsName>{pr.el?.writer}</S.BestBoardsName>
        </S.UserBox>
        <S.BestBoardsDate>
          Date: {getDatecomma(pr.el?.createdAt)}
        </S.BestBoardsDate>
      </S.ContentsBox>

      <S.BestBoardsLikeBox>
        <LikeIconsvg width="20" height="18" fill="#ffd600" />
        <S.BestBoardsLikeCount>{pr.el?.likeCount}</S.BestBoardsLikeCount>
      </S.BestBoardsLikeBox>
    </S.BestBoardsBox>
  );
};

export default BoardListBestBoards;
