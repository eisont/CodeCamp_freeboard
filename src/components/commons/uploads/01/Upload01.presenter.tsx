import * as S from "./Upload01.style";
import { IPropsPr } from "./Upload01.types";

const Uploads01UI = (pr: IPropsPr) => {
  return (
    <>
      {pr.fileUrl ? (
        <S.UploadImage
          onClick={pr.onClickUpload}
          src={`https://storage.googleapis.com/${pr.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={pr.onclickUpload} type="button">
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={pr.fileRef}
        onChange={pr.onChangeFile}
      />
    </>
  );
};

export default Uploads01UI;
