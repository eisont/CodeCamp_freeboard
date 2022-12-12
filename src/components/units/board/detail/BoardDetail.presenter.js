// 게시판 상세보기 presenter

import { getDatecomma } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import SectionVideoURL from "react-player";
import { Tooltip } from "antd";
import {
  Addresssvg,
  LikeIconsvg,
  LinkIconsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import BoardDetailCarousel from "../../../commons/carousel/boarddetail";

const BoardDetailUI = (pr) => {
  const ImageCheck = pr.data?.fetchBoard?.images?.filter((el) => el);

  console.log("data", pr.data?.fetchBoard);
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Header>
          <S.UserInformation>
            {pr.data?.fetchBoard?.user?.picture !== undefined ? (
              <S.UserProfilePhoto
                src={`https://storage.googleapis.com/${pr.data?.fetchBoard?.user?.picture}`}
              />
            ) : (
              <Profilesvg
                margin="0 16.67px 0 0"
                width="47"
                height="47"
                fill="#bdbdbd"
              />
            )}
            <div>
              <S.UserName>{pr.data?.fetchBoard?.writer}</S.UserName>
              <S.CreatedAt>
                Date: {getDatecomma(pr.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </div>
          </S.UserInformation>
          <S.HeaderButtons>
            <LinkIconsvg
              margin="29.33px"
              width="28"
              height="14"
              fill="#ffd600"
            />
            <Tooltip
              placement="top"
              title={
                pr.data?.fetchBoard?.boardAddress
                  ? `${pr.data?.fetchBoard.boardAddress?.address} ${pr.data?.fetchBoard.boardAddress?.addressDetail}`
                  : "등록한 주소가 없습니다."
              }
            >
              {/* div로 감싸지 않으면 Tooltip이 적용이 되지 않습니다. */}
              <div>
                <Addresssvg width="32" height="32" fill="#ffd600" />
              </div>
            </Tooltip>
          </S.HeaderButtons>
        </S.Header>

        <S.Body>
          <S.SectionText>{pr.data?.fetchBoard?.title}</S.SectionText>

          <BoardDetailCarousel key={uuidv4()} data={ImageCheck} />

          {typeof window !== "undefined" && (
            <S.SectionContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(pr.data?.fetchBoard?.contents)
                ),
              }}
            />
          )}

          <S.SectionVideoBox>
            {pr.data?.fetchBoard.youtubeUrl !== null && (
              <SectionVideoURL
                url={pr.data?.fetchBoard.youtubeUrl}
                width={486}
                height={240}
                muted={true}
                playing={true}
              />
            )}
          </S.SectionVideoBox>
        </S.Body>

        <S.LikeButtonBox>
          <S.LikeButton onClick={pr.onlikeCount}>
            <LikeIconsvg width="22" height="20" fill="#FFD600" />
            <S.LikeNumber>{pr.data?.fetchBoard.likeCount}</S.LikeNumber>
          </S.LikeButton>
          <S.DisLikeButton onClick={pr.ondislikeCount}>
            <LikeIconsvg
              width="22"
              height="20"
              fill="#828282"
              rotate="rotate(180deg)"
            />
            <S.DisLikeNumber>
              {pr.data?.fetchBoard.dislikeCount}
            </S.DisLikeNumber>
          </S.DisLikeButton>
        </S.LikeButtonBox>
      </S.Contents>

      <S.MenuButtons>
        <S.Button onClick={pr.onClickMoveToBoardList}>목록으로</S.Button>

        <S.Button onClick={pr.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button id={pr.boardId} onClick={pr.onClickDelete}>
          삭제하기
        </S.Button>
      </S.MenuButtons>
      <S.WrapperHr />
    </S.Wrapper>
  );
};

export default BoardDetailUI;
