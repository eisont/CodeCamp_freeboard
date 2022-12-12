// 게시판 댓글 등록 container

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  FETCH_BOARD_COMMENTS,
  FETCH_USER_LOGGED_IN,
} from "../list/BoardCommentList.queries";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";
import { Modal, notification } from "antd";

const BoardCommentWrite = (props: IBoardCommentWriteProps) => {
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

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeStar = (value: number) => {
    setStar(value);
  };
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
    } catch (error: any) {
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
      if (!props.el?._id) return;

      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: password,
          boardCommentId: props.el?._id,
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
      props.setIsEdit?.(false);
    } catch (error: any) {
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
      isEdit={props.isEdit}
    />
  );
};

export default BoardCommentWrite;
