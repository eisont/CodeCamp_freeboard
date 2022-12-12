// 게시판 등록 container

import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import {
  contentsErrorState,
  passwordErrorState,
  titleErrorState,
  writerErrorState,
} from "../../../../commons/store";
import { withAuth } from "../../../commons/hocs/withAuth";

function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  // Mutation
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  // 조건
  // 버튼 색상 조건
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // input 변수
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const [imageUrl, setImageUrl] = useState<string | undefined>("");
  // 오류 메세지
  const [, setWriterError] = useRecoilState(writerErrorState);
  const [, setPasswordError] = useRecoilState(passwordErrorState);
  const [, setTitleError] = useRecoilState(titleErrorState);
  const [, setContentsError] = useRecoilState(contentsErrorState);

  // onChange 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // Modal 부분
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(fileUrls)
  };

  // Click 함수
  // 등록하기 버튼
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: fileUrls,
            },
          },
        });
        Modal.success({ content: "게시물 등록에 성공하였습니다!" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };
  // 수정하기 버튼
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    // 문자열로 변환
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    // 문자열로 변환
    const isChangedFiles = currentFiles !== defaultFiles;
    // 비교를 하기 위해 문자열로 변환한 것을 비교합니다.

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangedFiles
    ) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    // 비밀번호를 입력하지 않을 때 실행
    if (!password) {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    }
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  // =========================================

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
      // 이렇게 사용하는 것은 권장 nonono 하지만 한 줄로 나타낼 수 있어 이렇게 작성하겠습니다.
      // 상황에 따라 작성하는 방법을 바꾸면서 사용하면 될거 같습니다.
    }
  }, [props.data]);

  return (
    <div>
      <BoardWriteUI
        // onChange
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onChangeAddressDetail={onChangeAddressDetail}
        onChangeFileUrls={onChangeFileUrls}
        // State 변수
        data={props.data}
        fileUrls={fileUrls}
        // Click
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        // Modal
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        // is 조건 활성화 변수
        isActive={isActive}
        isOpen={isOpen}
        isEdit={props.isEdit}
        address={address}
        addressDetail={addressDetail}
      />
    </div>
  );
}

export default withAuth(BoardWrite);
