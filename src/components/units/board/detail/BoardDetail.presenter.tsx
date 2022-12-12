// 게시판 상세보기 presenter

import { getDatecomma } from '../../../../commons/libraries/utils';
import { IBoardDetailUIProps } from './BoardDetail.types';
import * as S from './BoardDetail.styles';
import SectionVideoURL from 'react-player';
import { Tooltip } from 'antd';
import { Addresssvg, LikeIconsvg, LinkIconsvg, Profilesvg } from '../../../../commons/styles/Iconsvg';
import { v4 as uuidv4 } from 'uuid';
import DOMPurify from 'dompurify';
import BoardDetailCarousel from '../../../commons/carousel/boarddetail';

const BoardDetailUI = (props: IBoardDetailUIProps) => {
  const ImageCheck = props.data?.fetchBoard?.images?.filter((el: string) => el);
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Header>
          <S.UserInformation>
            {props.data?.fetchBoard?.user?.picture !== undefined ? (
              <S.UserProfilePhoto src={`https://storage.googleapis.com/${props.data?.fetchBoard?.user?.picture}`} />
            ) : (
              <Profilesvg margin='0 16.67px 0 0' width='47' height='47' fill='#bdbdbd' />
            )}
            <div>
              <S.UserName>{props.data?.fetchBoard?.writer}</S.UserName>
              <S.CreatedAt>Date: {getDatecomma(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </div>
          </S.UserInformation>
          <S.HeaderButtons>
            <LinkIconsvg margin='29.33px' width='28' height='14' fill='#ffd600' />
            <Tooltip
              placement='top'
              title={props.data?.fetchBoard?.boardAddress ? `${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}` : '등록한 주소가 없습니다.'}
            >
              {/* div로 감싸지 않으면 Tooltip이 적용이 되지 않습니다. */}
              <div>
                <Addresssvg width='32' height='32' fill='#ffd600' />
              </div>
            </Tooltip>
          </S.HeaderButtons>
        </S.Header>

        <S.Body>
          <S.SectionText>{props.data?.fetchBoard?.title}</S.SectionText>
          {ImageCheck?.length !== 0 && <BoardDetailCarousel key={uuidv4()} data={props.data?.fetchBoard?.images} />}

          {typeof window !== 'undefined' && (
            <S.SectionContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(props.data?.fetchBoard?.contents)),
              }}
            />
          )}
          <S.SectionVideoBox>
            {props.data?.fetchBoard.youtubeUrl !== null && <SectionVideoURL url={props.data?.fetchBoard.youtubeUrl} width={486} height={240} muted={true} playing={true} />}
          </S.SectionVideoBox>
        </S.Body>

        <S.LikeButtonBox>
          <S.LikeButton onClick={props.onlikeCount}>
            <LikeIconsvg width='22' height='20' fill='#FFD600' />
            <S.LikeNumber>{props.data?.fetchBoard.likeCount}</S.LikeNumber>
          </S.LikeButton>
          <S.DisLikeButton onClick={props.ondislikeCount}>
            <LikeIconsvg width='22' height='20' fill='#828282' rotate='rotate(180deg)' />
            <S.DisLikeNumber>{props.data?.fetchBoard.dislikeCount}</S.DisLikeNumber>
          </S.DisLikeButton>
        </S.LikeButtonBox>
      </S.Contents>

      <S.MenuButtons>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>

        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button id={props.boardId} onClick={props.onClickDelete}>
          삭제하기
        </S.Button>
      </S.MenuButtons>
      <S.WrapperHr />
    </S.Wrapper>
  );
};

export default BoardDetailUI;
