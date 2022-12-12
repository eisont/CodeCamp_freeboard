// 게시판 상세보기 presenter

import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import * as S from "./BoardDetail.styles";
import SectionVideoURL from "react-player";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.BoardNewTable>
          <S.Header>
            <S.UserInformation>
              <S.UserProfilePhoto />
              <S.UserProfile>
                <S.UserName>{props.data?.fetchBoard?.writer}</S.UserName>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.CreatedAt>
              </S.UserProfile>
            </S.UserInformation>
            <S.HeaderButtons>
              <S.SharingImg />
              <Tooltip
                placement="top"
                title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
              >
                {props.data?.fetchBoard.images && <S.LotationImg />}
              </Tooltip>
            </S.HeaderButtons>
          </S.Header>

          <S.Body>
            <S.SectionText>{props.data?.fetchBoard?.title}</S.SectionText>
            <S.SectionPhoto>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el) // 빈 사진은 보여주지 말아줘
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.SectionPhoto>
            <S.SectionContent>
              {props.data?.fetchBoard?.contents}
            </S.SectionContent>
            <S.SectionVideoBox>
              {props.data?.fetchBoard.youtubeUrl && (
                <SectionVideoURL
                  url={props.data?.fetchBoard.youtubeUrl}
                  width={486}
                  height={240}
                  muted={true}
                  playing={true}
                />
              )}
            </S.SectionVideoBox>
          </S.Body>

          <S.LikeButtonBox>
            <S.LikeButton>
              <S.LikeButtonImg onClick={props.onlikeCount} />
              <S.LikeNumber>{props.data?.fetchBoard.likeCount}</S.LikeNumber>
            </S.LikeButton>
            <S.DisLikeButton>
              <S.DisLikeButtonImg onClick={props.ondislikeCount} />
              <S.DisLikeNumber>
                {props.data?.fetchBoard.dislikeCount}
              </S.DisLikeNumber>
            </S.DisLikeButton>
          </S.LikeButtonBox>
        </S.BoardNewTable>

        <S.MenuButtons>
          <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
          <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
          <S.Button id={props.boardId} onClick={props.onClickDelete}>
            삭제하기
          </S.Button>
        </S.MenuButtons>
        <S.WrapperHr></S.WrapperHr>
      </S.Wrapper>
    </>
  );
}
