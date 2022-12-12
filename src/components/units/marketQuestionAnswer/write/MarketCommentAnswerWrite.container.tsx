// 중고마켓 댓글 등록 container

import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  CREATE_USED_ITEMS_QUESTION_ANSWER,
  UPDATE_USED_ITEMS_QUESTION_ANSWER,
} from "./MarketCommentAnswerWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { Modal, notification } from "antd";
import MarketCommentAnswerWriteUI from "./MarketCommentAnswerWrite.presenter";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "../list/MarketAnswerList.queries";

export default function MarketCommentAnswerWrite(props: any) {
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEMS_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEMS_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: props.commentel?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.commentel?._id) },
          },
        ],
      });
      notification.success({
        // 로그인한 사람이름
        message: `대댓글 등록하였습니다.`,
      });
      props.setIsEditSub(!props.isEditSub);
    } catch (error: any) {
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
          useditemQuestionAnswerId: String(props.answerel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.commentel?._id) },
          },
        ],
      });
      props.setIsEditSub(!props.isEditSub);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentAnswerWriteUI
      onChangeContents={onChangeContents}
      onClickAnswer={onClickAnswer}
      onClickUpdate={onClickUpdate}
      isEditSub={props.isEditSub}
      commentel={props.commentel}
      contents={contents}
    />
  );
}
