// 중고마켓 댓글 등록 container

import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  CREATE_USED_ITEMS_QUESTION_ANSWER,
  UPDATE_USED_ITEMS_QUESTION_ANSWER,
} from "./MarketCommentAnswerWrite.queries";
import { Modal, notification } from "antd";
import MarketCommentAnswerWriteUI from "./MarketCommentAnswerWrite.presenter";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "../list/MarketAnswerList.queries";

const MarketCommentAnswerWrite = (pr) => {
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEMS_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEMS_QUESTION_ANSWER
  );

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: pr.commentID,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(pr.commentID) },
          },
        ],
      });
      notification.success({
        // 로그인한 사람이름
        message: `대댓글 등록하였습니다.`,
      });
      pr.setIsEditSub(!pr.isEditSub);
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
      const updateUseditemQuestionAnswerInput = {};
      if (contents) updateUseditemQuestionAnswerInput.contents = contents;

      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionAnswerId: String(pr.answerel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(pr.commentID) },
          },
        ],
      });
      pr.setIsEditSub(!pr.isEditSub);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentAnswerWriteUI
      onChangeContents={onChangeContents}
      onClickAnswer={onClickAnswer}
      onClickUpdate={onClickUpdate}
      isEditSub={pr.isEditSub}
      contents={contents}
    />
  );
};

export default MarketCommentAnswerWrite;
