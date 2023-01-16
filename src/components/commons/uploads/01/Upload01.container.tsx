import { useMutation } from "@apollo/client";
import { useRef } from "react";
import Uploads01UI from "./Upload01.presenter";
import { UPLOAD_FILE } from "./Upload01.query";
import { IPopsCon } from "./Upload01.types";
import { checkValidationImage } from "./Upload01.validation";

const Uploads01 = (pr: IPopsCon) => {
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
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={pr.fileUrl}
      defaultFileUrl={pr.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChageFile={onChangeFile}
    />
  );
};

export default Uploads01;
