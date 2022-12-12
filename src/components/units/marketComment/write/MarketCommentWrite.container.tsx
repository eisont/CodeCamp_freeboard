// 중고마켓 댓글 등록 container

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "../list/MarketCommentList.queries";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { Modal, notification } from "antd";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";

export default function MarketCommentWrite(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
      const updateUseditemQuestionInput = {};
      if (contents) updateUseditemQuestionInput.contents = contents;

      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: String(props.commentel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickComment={onClickComment}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
    />
  );
}
