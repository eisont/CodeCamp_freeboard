import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  CREATE_BOARD,
  FETCH_LOGGEDIN_USER,
  UPDATE_BOARD,
} from "./BoardWrite.queries";
import { IBoardWriteProps } from "./BoardWrite.types";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { withAuth } from "../../../commons/hocs/withAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  password: yup.string().required("비밀번호는 필수 입력사항입니다."),
  title: yup.string().required("제목은 필수 입력사항입니다."),
  contents: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string().url("url을 정확히 작성해주세요."),
});
const updateschema = yup.object({
  password: yup.string().required("비밀번호는 필수 입력사항입니다."),
  title: yup.string(),
  contents: yup.string(),
  addressDetail: yup.string(),
  youtubeUrl: yup.string().url("url을 정확히 작성해주세요."),
});

const BoardWrite = (props: IBoardWriteProps) => {
  const router = useRouter();

  const { data: loggedInUser } = useQuery(FETCH_LOGGEDIN_USER);

  // Mutation
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  // 조건
  // 버튼 색상 조건
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // input 변수
  const [zonecode, setZonecode] = useState(
    props.fetchBoardData?.fetchBoard?.boardAddress?.zipcode || ""
  );
  const [address, setAddress] = useState(
    props.fetchBoardData?.fetchBoard?.boardAddress?.address || ""
  );

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const [imageUrl, setImageUrl] = useState<string | undefined>("");
  // 오류 메세지

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(props.isEdit ? updateschema : schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (props.fetchBoardData?.fetchBoard.images?.length) {
      setFileUrls([...props.fetchBoardData?.fetchBoard.images]);
      // 이렇게 사용하는 것은 권장 nonono 하지만 한 줄로 나타낼 수 있어 이렇게 작성하겠습니다.
      // 상황에 따라 작성하는 방법을 바꾸면서 사용하면 될거 같습니다.
    }
  }, [props.fetchBoardData]);

  // Modal 부분
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    console.log(fileUrls);
  };

  // Click 함수
  // 등록하기 버튼
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: loggedInUser?.fetchUserLoggedIn?.name,
            password: data?.password,
            title: data?.title,
            contents: data?.contents,
            youtubeUrl: data?.youtubeUrl,
            boardAddress: {
              zipcode: zonecode,
              address,
              addressDetail: data?.addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      alert(
        `'${result?.data?.createBoard?.title}'게시물 등록에 성공하였습니다!`
      );
      router.push(`/boards/${result.data?.createBoard?._id}`);
    } catch (errors: any) {
      Modal.error({ content: errors.message });
    }
  };

  // 수정하기 버튼
  const onClickUpdate = async (data: any) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(
      props.fetchBoardData?.fetchBoard?.images
    );
    // 비교를 하기 위해 문자열로 변환한 것을 비교합니다.
    const ImageCompare = currentFiles === defaultFiles;

    const TitleCompare =
      data?.title === props.fetchBoardData?.fetchBoard?.title;
    const ContentsCompare =
      data?.contents === props.fetchBoardData?.fetchBoard?.contents;
    const zipcodeCompare =
      zonecode === props.fetchBoardData?.fetchBoard?.boardAddress?.zipcode;
    const AddressCompare =
      address === props.fetchBoardData?.fetchBoard?.boardAddress?.address;
    const AddressDetailCompare =
      data?.addressDetail ===
      props.fetchBoardData?.fetchBoard?.boardAddress?.addressDetail;
    const YoutubeUrlCompare =
      data?.youtubeUrl === props.fetchBoardData?.fetchBoard?.youtubeUrl;

    if (
      TitleCompare &&
      ContentsCompare &&
      zipcodeCompare &&
      AddressCompare &&
      AddressDetailCompare &&
      YoutubeUrlCompare &&
      ImageCompare
    ) {
      alert("수정한 내용이 없습니다.");
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (!TitleCompare) updateBoardInput.title = data?.title;
    if (!ContentsCompare) updateBoardInput.contents = data?.contents;
    if (!YoutubeUrlCompare) updateBoardInput.youtubeUrl = data?.youtubeUrl;
    if (!zipcodeCompare || !AddressCompare || !AddressDetailCompare) {
      updateBoardInput.boardAddress = {};
      if (!zipcodeCompare) updateBoardInput.boardAddress.zipcode = zonecode;
      if (!AddressCompare) updateBoardInput.boardAddress.address = address;
      if (!AddressDetailCompare)
        updateBoardInput.boardAddress.addressDetail = data?.addressDetail;
    }
    if (!ImageCompare) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data?.password,
          updateBoardInput,
        },
      });
      alert("게시물 수정에 성공하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  // =========================================

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      // onChange
      onChangeFileUrls={onChangeFileUrls}
      // State 변수
      fetchBoardData={props.fetchBoardData}
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
      zonecode={zonecode}
    />
  );
};

export default withAuth(BoardWrite);
