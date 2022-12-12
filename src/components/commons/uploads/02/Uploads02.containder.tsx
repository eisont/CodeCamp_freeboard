import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationImage } from "./Uploads02.validation";
import Uploads02UI from "./Uploads02.presenter";
import { IUploads01Props } from "./Uploads02.types";
import { UPLOAD_FILE } from "./Uploads02.queries";
import { Modal } from "antd";

export default function Uploads02(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads02UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      picture={props?.picture}
      myProfile={props.myProfile}
    />
  );
}
