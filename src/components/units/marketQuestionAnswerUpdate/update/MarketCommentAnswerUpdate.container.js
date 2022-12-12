// 중고마켓 댓글 등록 container

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_USED_ITEMS_QUESTION_ANSWER } from "./MarketCommentAnswerUpdatequeries";
import MarketCommentAnswerUpdateUI from "./MarketCommentAnswerUpdate.presenter";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "../../marketQuestionAnswer/list/MarketAnswerList.queries";

const MarketCommentAnswerUpdate = (pr) => {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEMS_QUESTION_ANSWER
  );

  const onChangeContents = (event) => {
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
          useditemQuestionAnswerId: String(pr.answerel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(pr.commentel?._id) },
          },
        ],
      });
      pr.setIsUpdate(!pr.isUpdate);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentAnswerUpdateUI
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      isUpdate={pr.isUpdate}
      commentel={pr.commentel}
      contents={contents}
    />
  );
};

export default MarketCommentAnswerUpdate;
