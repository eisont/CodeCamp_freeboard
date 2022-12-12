import { CommentIconsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./BoardCommentWrite.styles";

const BoardCommentWriteUI = (pr) => {
  return (
    <S.Wrapper>
      {/* 등록하기 일때 보여줘 */}
      {!pr.isEdit && (
        <S.Flexbox>
          <CommentIconsvg
            margin="0 14px 0 0"
            width="20"
            height="20"
            fill="#ffd600"
          />{" "}
          댓글
        </S.Flexbox>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          // readOnly={!!pr.logginUser.name}
          defaultValue={pr.logginUser?.name}
          onChange={pr.onChangeWriter}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={pr.onChangePassword}
        />
        <S.Star onChange={pr.onChangeStar} />
      </S.InputWrapper>

      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={pr.onChangeContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          <S.ContentsLength>{pr.contents.length}/100</S.ContentsLength>
          <S.Button
            // 수정하기, 등록하기 조건에 따라 보여줘기
            onClick={pr.isEdit ? pr.onClickUpdate : pr.onClickWrite}
          >
            {/* 조건에 따라 보이기 */}
            {pr.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};

export default BoardCommentWriteUI;
