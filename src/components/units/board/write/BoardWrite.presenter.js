import * as S from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.containder";

const BoardWriteUI = (pr) => {
  return (
    <S.Wrapper
      onSubmit={
        pr.isEdit
          ? pr.handleSubmit(pr.onClickUpdate)
          : pr.handleSubmit(pr.onClickSubmit)
      }
    >
      <S.Title>{pr.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>

      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="(필수) 비밀번호를 작성해주세요."
            {...pr.register("password")}
          />
          <S.Error>{pr.formState?.errors?.password?.message}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>

      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="(필수) 제목을 작성해주세요."
          defaultValue={pr.fetchBoardData?.fetchBoard?.title}
          {...pr.register("title")}
        />
        <S.Error>{pr.formState?.errors?.title?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="(필수) 내용을 작성해주세요."
          defaultValue={pr.fetchBoardData?.fetchBoard?.contents}
          {...pr.register("contents")}
        />
        <S.Error>{pr.formState?.errors?.contents?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZonecodeWrapper>
          <S.Zonecode
            readOnly
            // value랑 defaultValue를 같이 작성합니다.
            defaultValue={
              pr.zonecode || pr.fetchBoardData?.fetchBoard.boardAddress?.zipcode
            }
            value={
              pr.zonecode ||
              pr.fetchBoardData?.fetchBoard.boardAddress?.zipcode ||
              "우편번호"
            }
          />
          <S.SearchButton onClick={pr.onClickAddressSearch} type="button">
            우편번호 검색
          </S.SearchButton>
          {pr.isOpen && (
            <Modal
              visible={pr.isOpen}
              onOk={pr.onClickAddressSearch}
              onCancel={pr.onClickAddressSearch}
              width={800}
            >
              <DaumPostcode onComplete={pr.onCompleteAddressSearch} />
            </Modal>
          )}
        </S.ZonecodeWrapper>
        <S.Addressbasic
          readOnly
          defaultValue={
            pr.address || pr.fetchBoardData?.fetchBoard.boardAddress?.address
          }
          value={
            pr.address ||
            pr.fetchBoardData?.fetchBoard.boardAddress?.address ||
            "(선택) 주소를 선택해주세요."
          }
        />
        <S.AddressDetail
          placeholder="(선택) 상세 주소를 입력해주세요."
          {...pr.register("addressDetail")}
          defaultValue={
            pr.addressDetail ||
            pr.fetchBoardData?.fetchBoard.boardAddress?.addressDetail ||
            ""
          }
        />
        <S.Error>{pr.formState?.errors?.addressDetail?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="(선택) 링크를 복사해주세요."
          {...pr.register("youtubeUrl")}
          defaultValue={pr.fetchBoardData?.fetchBoard?.youtubeUrl}
        />
        <S.Error>{pr.formState?.errors?.youtubeUrl?.message}</S.Error>
      </S.InputWrapper>

      <S.ImageWrapper>
        <S.ImageTitle>사진 첨부</S.ImageTitle>
        {pr.fileUrls.map((el, index) => (
          <Uploads01
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={pr.onChangeFileUrls}
          />
        ))}
      </S.ImageWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton isActive={pr.isEdit ? true : pr.isActive}>
          {pr.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default BoardWriteUI;
