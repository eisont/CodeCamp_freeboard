import { UploadButton, UploadFileHidden, UploadImage } from './Uploads01.styles';
import { IUploads01UIProps } from './Uploads01.types';

const Uploads01UI = (props: IUploads01UIProps) => {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={`https://storage.googleapis.com/${props.fileUrl}`} />
      ) : (
        <UploadButton onClick={props.onClickUpload} type='button'>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      {/* display: none */}
      <UploadFileHidden type='file' ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
};

export default Uploads01UI;
