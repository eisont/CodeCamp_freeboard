// 게시판 댓글 등록 container

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  FETCH_BOARD_COMMENTS,
  FETCH_USER_LOGGED_IN,
} from "../list/BoardCommentList.queries";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { Modal, notification } from "antd";

const BoardCommentWrite = (pr) => {
  const { data: logginUser } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  const [writer, setWriter] = useState(
    `${
      logginUser?.fetchUserLoggedIn?.name === undefined
        ? "작성자 없음"
        : logginUser?.fetchUserLoggedIn?.name
    }`
  );
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onChangeStar = (value) => {
    setStar(value);
  };
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  // 상세보기 댓글창 등록하기 버튼
  const onClickWrite = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            // 별점
            rating: star,
          },
          boardId: String(router.query.boardId),
        },
        // 목록 부분을 업데이트해서 최근에 올린 댓글까지 볼수 있게 만들어줍니다.
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      notification.open({
        message: `${result.data?.createBoardComment.writer}님이 댓글 등록하였습니다.`,
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      // id가 없을때 바로 return
      if (!pr.el?._id) return;

      const updateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star !== pr.el?.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: password,
          boardCommentId: pr.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      // 화면 원상 복귀하기 위한 코드
      // false 일때는 수정창이 없습니다.
      pr.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      logginUser={logginUser?.fetchUserLoggedIn}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      contents={contents}
      writer={writer}
      password={password}
      isEdit={pr.isEdit}
    />
  );
};

export default BoardCommentWrite;
