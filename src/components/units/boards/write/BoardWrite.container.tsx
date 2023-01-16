import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../../path/to/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../detail/BoardDetail.query";
import BaordWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fileType, IAddressData, IData, IPropsCon } from "./BoardWrite.types";

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
  addressDeatail: yup.string(),
  youtubeUrl: yup.string().url("url을 정확히 작성해주세요."),
});

const BoardWrite = (pr: IPropsCon) => {
  const router = useRouter();

  const { data: loggedInUser } = useQuery<IQuery, "fetchUserLoggedIn">(
    FETCH_USER_LOGGED_IN
  );

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zonecode, setZonecode] = useState(
    pr.fetchBoardData?.fetchBoard?.boardAddress?.zipcode || ""
  );
  const [address, setAddress] = useState(
    pr.fetchBoardData?.fetchBoard?.boardAddress?.address || ""
  );
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(pr.isEdit ? updateschema : schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (pr.fetchBoardData?.fetchBoard.images?.length) {
      setFileUrls([...pr.fetchBoardData?.fetchBoard.images]);
    }
  }, [pr.fetchBoardData]);

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: IAddressData) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen(false);
  };

  const onChangeFileUrls = (fileUrl: fileType, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = String(fileUrl);
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: loggedInUser?.fetchUserLoggedIn?.name,
            password: data?.password,
            title: String(data?.title),
            contents: String(data?.contents),
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
      alert(`${result.data?.createBoard?.title} 게시물 등록에 성공하였습니다.`);
      router.push(`/boards/${result.data?.createBoard?._id}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onClickUpdate = async (data: IData) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(pr.fetchBoardData?.fetchBoard?.images);
    const ImageCompare = currentFiles === defaultFiles;
    const TitleCompare = data?.title === pr.fetchBoardData?.fetchBoard?.title;
    const ComtentsCompare =
      data?.contents === pr.fetchBoardData?.fetchBoard?.contents;
    const zipcodeCompare =
      zonecode === pr.fetchBoardData?.fetchBoard?.boardAddress?.zipcode;
    const AddressCompare =
      address === pr.fetchBoardData?.fetchBoard?.boardAddress?.address;
    const AddressDetailCompare =
      data?.addressDetail ===
      pr.fetchBoardData?.fetchBoard?.boardAddress?.addressDetail;
    const YoutubeUrlCompare =
      data?.youtubeUrl === pr.fetchBoardData?.fetchBoard?.youtubeUrl;

    if (
      ImageCompare &&
      TitleCompare &&
      ComtentsCompare &&
      zipcodeCompare &&
      AddressCompare &&
      AddressDetailCompare &&
      YoutubeUrlCompare
    ) {
      alert("수정한 내용이 없습니다.");
    }

    const updateBoardInput = {};
    if (!TitleCompare) updateBoardInput.title = data?.title;
    if (!ComtentsCompare) updateBoardInput.contents = data?.contents;
    if (!zipcodeCompare || !AddressCompare || !AddressDetailCompare) {
      if (!zipcodeCompare) updateBoardInput.boardAddress.zipcode = zonecode;
      if (!AddressCompare) updateBoardInput.boardAddress.address = address;
      if (!AddressDetailCompare)
        updateBoardInput.boardAddress.addressDetail = data?.addressDetail;
    }
    if (!ImageCompare) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: data?.password,
          updateBoardInput,
        },
      });
      alert("게시글 수정에 성공하였습니다.");
      router.push(`boards/${router.query.boardId}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickBack = () => {
    router.back();
  };

  return (
    <BaordWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeFileUrls={onChangeFileUrls}
      fetchBoardData={pr.fetchBoardData}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickBack={onClickBack}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      isActive={isActive}
      isOpen={isOpen}
      isEdit={pr.isEdit}
      address={address}
      zonecode={zonecode}
    />
  );
};

export default BoardWrite;
