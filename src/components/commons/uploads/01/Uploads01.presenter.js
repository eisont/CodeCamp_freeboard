import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";

const Uploads01UI = (pr) => {
  return (
    <>
      {pr.fileUrl ? (
        <UploadImage
          onClick={pr.onClickUpload}
          src={`https://storage.googleapis.com/${pr.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={pr.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      {/* display: none */}
      <UploadFileHidden
        type="file"
        ref={pr.fileRef}
        onChange={pr.onChangeFile}
      />
    </>
  );
};

export default Uploads01UI;
