import * as S from './BoardWrite.styles';
import { Modal } from 'antd';
import { IBoardWriteUIProps } from './BoardWrite.types';
import DaumPostcode from 'react-daum-postcode';
import { v4 as uuidv4 } from 'uuid';
import Uploads01 from '../../../commons/uploads/01/Uploads01.containder';

const BoardWriteUI = (props: IBoardWriteUIProps) => {
  return (
    <S.Wrapper onSubmit={props.isEdit ? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onClickSubmit)}>
      <S.Title>{props.isEdit ? '게시판 수정' : '게시판 등록'}</S.Title>

      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password type='password' placeholder='(필수) 비밀번호를 작성해주세요.' {...props.register('password')} />
          <S.Error>{props.formState?.errors?.password?.message}</S.Error>
        </S.InputWrapper>
      </S.WriterWrapper>

      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject type='text' placeholder='(필수) 제목을 작성해주세요.' defaultValue={props.fetchBoardData?.fetchBoard?.title} {...props.register('title')} />
        <S.Error>{props.formState?.errors?.title?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents placeholder='(필수) 내용을 작성해주세요.' defaultValue={props.fetchBoardData?.fetchBoard?.contents} {...props.register('contents')} />
        <S.Error>{props.formState?.errors?.contents?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZonecodeWrapper>
          <S.Zonecode
            readOnly
            // value랑 defaultValue를 같이 작성합니다.
            defaultValue={props.zonecode || props.fetchBoardData?.fetchBoard.boardAddress?.zipcode}
            value={props.zonecode || props.fetchBoardData?.fetchBoard.boardAddress?.zipcode || '우편번호'}
          />
          <S.SearchButton onClick={props.onClickAddressSearch} type='button'>
            우편번호 검색
          </S.SearchButton>
          {props.isOpen && (
            <Modal visible={props.isOpen} onOk={props.onClickAddressSearch} onCancel={props.onClickAddressSearch} width={800}>
              <DaumPostcode onComplete={props.onCompleteAddressSearch} />
            </Modal>
          )}
        </S.ZonecodeWrapper>
        <S.Addressbasic
          readOnly
          defaultValue={props.address || props.fetchBoardData?.fetchBoard.boardAddress?.address}
          value={props.address || props.fetchBoardData?.fetchBoard.boardAddress?.address || '(선택) 주소를 선택해주세요.'}
        />
        <S.AddressDetail
          placeholder='(선택) 상세 주소를 입력해주세요.'
          {...props.register('addressDetail')}
          defaultValue={props.addressDetail || props.fetchBoardData?.fetchBoard.boardAddress?.addressDetail || ''}
        />
        <S.Error>{props.formState?.errors?.addressDetail?.message}</S.Error>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder='(선택) 링크를 복사해주세요.' {...props.register('youtubeUrl')} defaultValue={props.fetchBoardData?.fetchBoard?.youtubeUrl} />
        <S.Error>{props.formState?.errors?.youtubeUrl?.message}</S.Error>
      </S.InputWrapper>

      <S.ImageWrapper>
        <S.ImageTitle>사진 첨부</S.ImageTitle>
        {props.fileUrls.map((el, index) => (
          <Uploads01 key={uuidv4()} index={index} fileUrl={el} onChangeFileUrls={props.onChangeFileUrls} />
        ))}
      </S.ImageWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton isActive={props.isEdit ? true : props.isActive}>{props.isEdit ? '수정하기' : '등록하기'}</S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default BoardWriteUI;
