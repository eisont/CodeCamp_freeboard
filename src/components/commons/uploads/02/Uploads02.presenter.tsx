import { ImageChange, Profilesvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./Uploads02.styled";
import { IUploads01UIProps } from "./Uploads02.types";

export default function Uploads02UI(props: IUploads01UIProps) {
  return (
    <>
      {props?.picture !== null ? (
        <S.UserPictureBox>
          <S.UserPicture src={props?.picture} />
        </S.UserPictureBox>
      ) : (
        <S.UserPictureBox>
          <Profilesvg width="80" height="80" fill="#bdbdbd" />
          {props.myProfile && (
            <S.AbsoluteBox onClick={props.onClickUpload}>
              <ImageChange
                width="20"
                height="20"
                CilcleFill="#ffd600"
                SettingFill="#fff"
              />
            </S.AbsoluteBox>
          )}
        </S.UserPictureBox>
      )}

      {/* {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )} */}

      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
