// 중고마켓 댓글 목록 수정창 component

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, notification } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import * as S from "./MarketCommentList.styles";
import { IMarketCommentListUIItemProps } from "./MarketCommentList.types";
import { getDate } from "../../../../commons/libraries/utils";
import MarketCommentAnswerWrite from "../../marketQuestionAnswer/write/MarketCommentAnswerWrite.container";
import MarketAnswerList from "../../marketQuestionAnswer/list/MarketAnswerList.container";

export default function MarketCommentListUIItem(
  props: IMarketCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditSub, setIsEditSub] = useState(false);

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };
  const onClickCreateAnswer = () => {
    setIsEditSub((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.commentel?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      notification.error({
        message: `${props.commentel?.contents} 댓글이 삭제되었습니다.`,
        placement: "topLeft",
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Box>
              <S.Avatar />
              <S.SecondBox>
                <S.UserName>{props.commentel?.user?.name}</S.UserName>
                <S.CreateAt>{getDate(props.commentel?.createdAt)}</S.CreateAt>
              </S.SecondBox>
            </S.Box>

            <S.OptionWrapper>
              <S.QuestionIcon onClick={onClickCreateAnswer} />
              <S.UpdateIcon onClick={onClickUpdate} />
              <S.DeleteIcon onClick={onClickDelete} />
            </S.OptionWrapper>
          </S.FlexWrapper>

          <S.Contents>{props.commentel?.contents}</S.Contents>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <MarketCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          commentel={props.commentel}
        />
      )}
      {isEditSub && (
        <MarketCommentAnswerWrite
          isEditSub={true}
          setIsEditSub={setIsEditSub}
          commentel={props.commentel}
        />
      )}
      <MarketAnswerList
        isEditSub={isEditSub}
        setIsEditSub={setIsEditSub}
        commentel={props.commentel}
      />
    </>
  );
}
