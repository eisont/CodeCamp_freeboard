// 중고마켓 댓글 목록 수정창 component

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, notification } from "antd";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import * as S from "./MarketCommentList.styles";
import { getDatecomma } from "../../../../commons/libraries/utils";
import MarketCommentAnswerWrite from "../../marketQuestionAnswer/write/MarketCommentAnswerWrite.container";
import MarketAnswerList from "../../marketQuestionAnswer/list/MarketAnswerList.container";
import {
  Closesvg,
  Pencilsvg,
  Profilesvg,
  Questionsvg,
} from "../../../../commons/styles/Iconsvg";
import DOMPurify from "dompurify";

const MarketCommentListUIItem = (pr) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isEditSub, setIsEditSub] = useState(false);

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

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
          useditemQuestionId: pr.commentel?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      notification.error({
        message: `${pr.commentel?.contents} 댓글이 삭제되었습니다.`,
        placement: "topLeft",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isEdit ? (
        <MarketCommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          commentID={pr.commentel?._id}
        />
      ) : (
        <S.ItemWrapper>
          <S.FlexBox>
            {pr.commentel?.user?.picture === null ? (
              <Profilesvg width="40" height="40" fill="#bdbdbd" />
            ) : (
              <S.Avatar
                src={
                  pr.commentel?.user?.picture?.includes("data:image")
                    ? pr.commentel?.user?.picture
                    : `https://storage.googleapis.com/${pr.commentel?.user?.picture}`
                }
              />
            )}

            <S.TitleBox>
              <S.UserName>{pr.commentel?.user?.name}</S.UserName>

              {typeof window !== "undefined" && (
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(String(pr.commentel?.contents)),
                  }}
                />
              )}

              <S.CreateAt>{getDatecomma(pr.commentel?.createdAt)}</S.CreateAt>
            </S.TitleBox>
          </S.FlexBox>

          <S.BtBox>
            <S.Bt onClick={onClickCreateAnswer}>
              <Questionsvg
                margin="0 16px 0 0"
                width="20"
                heigth="20"
                fill="#bdbdbd"
              />
            </S.Bt>
            <S.Bt onClick={onClickUpdate}>
              <Pencilsvg
                margin="0 16px 0 0"
                width="18"
                heigth="18"
                fill="#bdbdbd"
              />
            </S.Bt>
            <S.Bt onClick={onClickDelete}>
              <Closesvg width="14" heigth="14" fill="#bdbdbd" />
            </S.Bt>
          </S.BtBox>
        </S.ItemWrapper>
      )}
      {isEditSub && (
        <MarketCommentAnswerWrite
          isEditSub={true}
          setIsEditSub={setIsEditSub}
          commentID={pr.commentel?._id}
        />
      )}
      <MarketAnswerList
        isEditSub={isEditSub}
        setIsEditSub={setIsEditSub}
        commentID={pr.commentel?._id}
      />
      <S.Hr />
    </>
  );
};

export default MarketCommentListUIItem;
