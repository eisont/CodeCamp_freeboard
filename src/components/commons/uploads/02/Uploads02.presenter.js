import { ImageChange, Profilesvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./Uploads02.styles";

const Uploads02UI = (pr) => {
  return (
    <>
      {pr?.picture !== null ? (
        <S.UserPictureBox>
          <S.UserPicture src={pr?.picture} />
        </S.UserPictureBox>
      ) : (
        <S.UserPictureBox>
          <Profilesvg width="80" height="80" fill="#bdbdbd" />
          {pr.myProfile && (
            <S.AbsoluteBox onClick={pr.onClickUpload}>
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

      {/* {pr.fileUrl ? (
        <S.UploadImage
          onClick={pr.onClickUpload}
          src={`https://storage.googleapis.com/${pr.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={pr.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )} */}

      <S.UploadFileHidden
        type="file"
        ref={pr.fileRef}
        onChange={pr.onChangeFile}
      />
    </>
  );
};

export default Uploads02UI;
