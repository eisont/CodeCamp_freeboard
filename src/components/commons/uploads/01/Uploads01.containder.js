import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";

const Uploads01 = (pr) => {
  const fileRef = useRef();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      pr.onChangeFileUrls(result.data.uploadFile.url, pr.index);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={pr.fileUrl}
      defaultFileUrl={pr.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
};

export default Uploads01;
