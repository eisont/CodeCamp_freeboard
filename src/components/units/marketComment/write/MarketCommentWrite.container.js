// 중고마켓 댓글 등록 container

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "../list/MarketCommentList.queries";
import { Modal, notification } from "antd";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";

const MarketCommentWrite = (pr) => {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  // 상세보기 댓글창 등록하기 버튼
  const onClickComment = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      notification.success({
        // 로그인한 사람이름
        message: `${data?.fetchUserLoggedIn.name}님이 댓글 등록하였습니다.`,
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
    try {
      // id가 없을때 바로 return
      const updateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: String(pr.commentID),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      pr.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickComment={onClickComment}
      onClickUpdate={onClickUpdate}
      isEdit={pr.isEdit}
      el={pr.el}
      contents={contents}
    />
  );
};

export default MarketCommentWrite;
