// 중고마켓 댓글 목록 수정창 component

// import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal, notification } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./MarketAnswerList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEMS_QUESTION_ANSWERS,
} from "./MarketAnswerList.queries";
import { IMarketCommentListUIItemProps } from "./MarketAnswerList.types";
import { useMutation } from "@apollo/client";
import MarketCommentAnswerWrite from "../write/MarketCommentAnswerWrite.container";
import MarketCommentAnswerUpdate from "../../marketQuestionAnswerUpdate/update/MarketCommentAnswerUpdate.container";

export default function MarketAnswerListUIItem(
  props: IMarketCommentListUIItemProps
) {
  const [isEditSub, setIsEditSub] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onClickUpdate = () => {
    setIsEditSub(!isEditSub);
    setIsUpdate(!isUpdate);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.answerel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(props.commentel?._id) },
          },
        ],
      });
      notification.error({
        message: `${props.answerel?.contents} 대댓글이 삭제되었습니다.`,
        placement: "topLeft",
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {!isEditSub && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Box>
              <S.Avatar />
              <S.SecondBox>
                <S.UserName>{props.answerel?.user?.name}</S.UserName>
                <S.CreateAt>{getDate(props.answerel?.createdAt)}</S.CreateAt>
              </S.SecondBox>
            </S.Box>

            <S.OptionWrapper>
              {/* <S.UpdateIcon onClick={onClickUpdate} /> */}
              <S.DeleteIcon onClick={onClickDelete} />
            </S.OptionWrapper>
          </S.FlexWrapper>

          <S.Contents>{props.answerel?.contents}</S.Contents>
        </S.ItemWrapper>
      )}
      {isEditSub && (
        <MarketCommentAnswerWrite
          isEditSub={!isEditSub}
          setIsEditSub={setIsEditSub}
          answerel={props.answerel}
        />
      )}
      {isUpdate && (
        <MarketCommentAnswerUpdate
          answerel={props.answerel}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </>
  );
}
