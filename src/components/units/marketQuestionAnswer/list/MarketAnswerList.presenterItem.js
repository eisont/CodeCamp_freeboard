// 중고마켓 댓글 목록 수정창 component

// import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal, notification } from "antd";
import * as S from "./MarketAnswerList.styles";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEMS_QUESTION_ANSWERS,
} from "./MarketAnswerList.queries";
import { useMutation } from "@apollo/client";
import MarketCommentAnswerWrite from "../write/MarketCommentAnswerWrite.container";
import MarketCommentAnswerUpdate from "../../marketQuestionAnswerUpdate/update/MarketCommentAnswerUpdate.container";
import {
  AnswerArrow,
  Closesvg,
  Pencilsvg,
  Profilesvg,
} from "../../../../commons/styles/Iconsvg";

const MarketAnswerListUIItem = (pr) => {
  const [isEditSub, setIsEditSub] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickUpdate = () => {
    setIsEditSub(!isEditSub);
    setIsUpdate(!isUpdate);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(pr.answerel?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(pr?.commentID) },
          },
        ],
      });
      notification.error({
        message: `${pr.answerel?.contents} 대댓글이 삭제되었습니다.`,
        placement: "topLeft",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  console.log("data", pr.answerel?.user?.picture);

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
            {pr.answerel?.user?.picture === null ? (
              <Profilesvg width="40" height="40" fill="#bdbdbd" />
            ) : (
              <S.Avatar
                src={
                  pr.answerel?.user?.picture?.includes("data:image")
                    ? pr.answerel?.user?.picture
                    : `https://storage.googleapis.com/${pr.answerel?.user?.picture}`
                }
              />
            )}

            <S.ContentsBox>
              <S.Name>{pr.answerel?.user?.name}</S.Name>
              <S.Contents>{pr.answerel?.contents}</S.Contents>
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
          answerel={pr.answerel}
        />
      )}
      {isUpdate && (
        <MarketCommentAnswerUpdate
          answerel={pr.answerel}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </>
  );
};

export default MarketAnswerListUIItem;
