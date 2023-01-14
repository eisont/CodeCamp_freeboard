import DOMPurify from "dompurify";
import { Tooltip } from "antd";
import {
  Addresssvg,
  LikeIconsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";
import * as S from "./BoardDetail.style";
import { getDateComma } from "../../../../commons/libraries/utiles";
import BoardDetailCarousel from "../../../commons/carousel/boardCarousel";
import { IPropsPre } from "./BoardDetail.types";

const BoardDetailUI = (pr: IPropsPre) => {
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Header>
          <S.UserInformation>
            {pr.fetchBoardData?.fetchBoard?.user?.picture !== undefined && (
              <S.UserProfilePhoto
                src={`https://storage.googleapie.com/${pr.fetchBoardData?.fetchBoard?.user?.picture}`}
              />
            )}

            {pr.fetchBoardData?.fetchBoard?.user?.picture === undefined && (
              <Profilesvg
                margin="0 16.67px 0 0"
                width="47"
                height="47"
                fill="#bdbdbd"
              />
            )}

            <div>
              <S.UserName>{pr.fetchBoardData?.fetchBoard?.writer}</S.UserName>
              <S.CreatedAt>
                Date: {getDateComma(pr.fetchBoardData?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </div>
          </S.UserInformation>
          <S.HeaderButtons>
            <LikeIconsvg
              margin="29.33px"
              width="28"
              height="14"
              fill="#ffd600"
            />
            <Tooltip
              placement="top"
              title={
                pr.fetchBoardData?.fetchBoard?.boardAddress
                  ? `${pr.fetchBoardData?.fetchBoard.boardAddress?.address} ${pr.fetchBoardData?.fetchBoard.boardAddress?.addressDetail}`
                  : "등록한 주소가 없습니다."
              }
            />
            <div>
              <Addresssvg width="32" height="32" fill="#ffd600" />
            </div>
          </S.HeaderButtons>
        </S.Header>

        <S.Body>
          <S.SectionText>{pr.fetchBoardData?.fetchBoard?.title}</S.SectionText>

          <BoardDetailCarousel images={pr.ImageCheck} />

          {typeof window !== "undefined" && (
            <S.SectionContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(pr.fetchBoardData?.fetchBoard?.contents)
                ),
              }}
            />
          )}

          <S.SectionVideoBox>
            {pr.fetchBoardData?.fetchBoard.youtubeUrl !== null && (
              <S.SectionVideoURL
                url={String(pr.fetchBoardData?.fetchBoard.youtubeUrl)}
              />
            )}
          </S.SectionVideoBox>
        </S.Body>

        <S.LikeButtonBox>
          <S.LikeButton onClick={pr.onClickLikeCount}>
            <LikeIconsvg width="22" height="20" fill="#ffd600" />
            <S.LikeNumber>
              {pr.fetchBoardData?.fetchBoard.likeCount}
            </S.LikeNumber>
          </S.LikeButton>
          <S.DisLikeButton onClick={pr.onClickDisLikeCount}>
            <LikeIconsvg
              width="22"
              height="20"
              fill="#ffd600"
              rotate="rotate(180deg)"
            />
            <S.DisLikeNumber>
              {pr.fetchBoardData?.fetchBoard.dislikeCount}
            </S.DisLikeNumber>
          </S.DisLikeButton>
        </S.LikeButtonBox>
      </S.Contents>

      <S.MenuButtons>
        <S.Button onClick={pr.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={pr.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button onClick={pr.onClickDelete}>삭제하기</S.Button>
      </S.MenuButtons>
      <S.WrapperHr />
    </S.Wrapper>
  );
};

export default BoardDetailUI;
