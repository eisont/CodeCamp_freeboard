// 게시판 댓글 수정창 페이지

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import {
  Closesvg,
  Pencilsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";

const BoardCommentListUIItem = (pr) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: pr.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event) => {
    setMyPassword(event.target.value);
  };

  return (
    <S.Wrapper>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <Profilesvg width="40" heigh="40" fill="#bdbdbd" />

          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>{pr.el?.writer}</S.Writer>
              <S.Star value={pr.el?.rating} disabled />
            </S.WriterWrapper>
            <S.Contents>
              {pr.el?.contents.length === 0 ? "컨텐츠 없음" : pr.el?.contents}
            </S.Contents>
            <S.Date>{getDatecomma(pr.el?.createdAt)}</S.Date>
          </S.MainWrapper>

          <S.OptionWrapper>
            <div onClick={onClickUpdate}>
              <Pencilsvg
                margin="0 16px 0 0"
                width="19"
                height="18"
                fill="#BDBDBD"
              />
            </div>
            <div onClick={onClickOpenDeleteModal}>
              <Closesvg width="14" height="14" fill="#bdbdbd" />
            </div>
          </S.OptionWrapper>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={pr.el} />
      )}
      <S.Hr />
    </S.Wrapper>
  );
};

export default BoardCommentListUIItem;
