// 중고마켓 댓글 등록 presenter

import { CommentIconsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./MarketCommentWrite.styles";
import { IMarketCommentWriteUIProps } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(
  props: IMarketCommentWriteUIProps
) {
  return (
    <S.Wrapper>
      {/* isEdit이 false일때 댓글 입력창 보여줘 */}
      {!props.isEdit && (
        <S.Title>
          <CommentIconsvg
            margin="0 14px 0 0"
            width="20"
            height="20"
            fill="#ffd600"
          />
          문의하기
        </S.Title>
      )}
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          defaultValue={props.el?.contents}
          onChange={props.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          {/* 글자 갯수를 보여주는 역할 */}
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickComment}
          >
            {props.isEdit ? "수정하기" : "문의하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
