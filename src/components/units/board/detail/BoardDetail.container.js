// 게시판 상세보기 container

import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { Modal } from "antd";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  FETCH_USER_LOGGED_IN,
} from "./BoardDetail.queries";
import { withAuth } from "../../../commons/hocs/withAuth";

const BoardDetail = () => {
  const router = useRouter();
  // 그 페이지 조회
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const { data: loggedUser } = useQuery(FETCH_USER_LOGGED_IN);

  // 삭제
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 좋아요
  const [likeBoard] = useMutation(LIKE_BOARD);

  // 싫어요
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onlikeCount = () => {
    likeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  const ondislikeCount = () => {
    dislikeBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.boardId,
          },
        },
      ],
    });
  };

  // 목록으로 버튼
  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };
  // 수정하기로 버튼
  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push("/boards");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardDetailUI
      // 현재 로그인 정보 data
      loggedUser={loggedUser}
      // 게시판의 정보를 담은 객체 data
      data={data}
      // 좋아요 & 삭제
      onlikeCount={onlikeCount}
      ondislikeCount={ondislikeCount}
      // 목록으로 버튼
      onClickMoveToBoardList={onClickMoveToBoardList}
      // 수정하기로 버튼
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      // 삭제 버튼
      onClickDelete={onClickDelete}
    />
  );
};

export default withAuth(BoardDetail);
