// 중고마켓 댓글 등록 container

import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { UPDATE_USED_ITEMS_QUESTION_ANSWER } from "./MarketCommentAnswerUpdatequeries";
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentAnswerUpdateUI from "./MarketCommentAnswerUpdate.presenter";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "../../marketQuestionAnswer/list/MarketAnswerList.queries";

export default function MarketCommentAnswerUpdate(props: any) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USED_ITEMS_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
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
      props.setIsUpdate(!props.isUpdate);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentAnswerUpdateUI
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      isUpdate={props.isUpdate}
      commentel={props.commentel}
      contents={contents}
    />
  );
}
