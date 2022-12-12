// 중고마켓 댓글 목록 수정창 component

// import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal, notification } from "antd";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./MarketAnswerList.styles";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEMS_QUESTION_ANSWERS,
} from "./MarketAnswerList.queries";
import { IMarketCommentListUIItemProps } from "./MarketAnswerList.types";
import { useMutation } from "@apollo/client";
import MarketCommentAnswerWrite from "../write/MarketCommentAnswerWrite.container";
import MarketCommentAnswerUpdate from "../../marketQuestionAnswerUpdate/update/MarketCommentAnswerUpdate.container";
import {
  AnswerArrow,
  Closesvg,
  Pencilsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";

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
            variables: { useditemQuestionId: String(props?.commentID) },
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

  console.log("data", props.answerel?.user?.picture);

  return (
    <>
      {!isEditSub && (
        <S.ItemWrapper>
          <S.Box>
            <AnswerArrow
              margin="0 24px 0 60px"
              width="15"
              height="17"
              fill="#000"
            />
            {props.answerel?.user?.picture === null ? (
              <Profilesvg width="40" height="40" fill="#bdbdbd" />
            ) : (
              <S.Avatar
                src={
                  // props.answerel?.user?.picture?.inclueds("data:image")
                  // ?
                  props.answerel?.user?.picture
                  // : `https://storage.googleapis.com/${props.answerel?.user?.picture}`
                }
              />
            )}

            <S.ContentsBox>
              <S.Name>{props.answerel?.user?.name}</S.Name>
              <S.Contents>{props.answerel?.contents}</S.Contents>
            </S.ContentsBox>
          </S.Box>

          <S.OptionWrapper>
            <S.UpdateBt onClick={onClickUpdate}>
              <Pencilsvg
                margin="0 16px 0 0"
                width="18"
                height="18"
                fill="#bdbdbd"
              />
            </S.UpdateBt>
            <S.DeleteBt onClick={onClickDelete}>
              <Closesvg
                margin="0 16px 0 0"
                width="18"
                height="18"
                fill="#bdbdbd"
              />
            </S.DeleteBt>
          </S.OptionWrapper>
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
