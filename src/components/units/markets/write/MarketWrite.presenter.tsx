// 중고마켓 등록 presenter

import * as S from "./MarketWrite.styles";
import { SmileOutlined } from "@ant-design/icons";
import { IMarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import KakaoMapPage from "../../../commons/kakaomap/01/kakaomap01";
import { useRecoilState } from "recoil";
import {
  contentsErrorState,
  LatState,
  LngState,
  nameErrorState,
  priceErrorState,
  remarksErrorState,
} from "../../../../commons/store";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Uploads01 from "../../../commons/uploads/01/Uploads01.containder";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  const [lat] = useRecoilState(LatState);
  const [lng] = useRecoilState(LngState);
  const [nameError] = useRecoilState(nameErrorState);
  const [remarksError] = useRecoilState(remarksErrorState);
  const [priceError] = useRecoilState(priceErrorState);
  const [contentsError] = useRecoilState(contentsErrorState);
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>

      {/* 상품명 */}
      <S.InputWrapper>
        <S.Label>상품명</S.Label>
        <S.Subject
          type="text"
          placeholder="(필수) 상품명을 작성해주세요."
          onChange={props.onChangeName}
        />
        <S.Error>{nameError}</S.Error>
      </S.InputWrapper>
      {/* 한줄요약 */}
      <S.InputWrapper>
        <S.Label>한줄요약</S.Label>
        <S.Subject
          type="text"
          placeholder="(필수) 한줄요약을 작성해주세요."
          onChange={props.onChangRemarks}
        />
        <S.Error>{remarksError}</S.Error>
      </S.InputWrapper>
      {/* 상품설명 */}
      <S.InputWrapper>
        <S.Label>상품설명</S.Label>
        <ReactQuill
          onChange={props.onChangeContents}
          style={{ width: "996px", height: "300px", background: "#fff" }}
          placeholder="(필수) 상품설명을 작성해주세요."
        />
        <S.Error>{contentsError}</S.Error>
      </S.InputWrapper>
      {/* 판매가격 */}
      <S.InputWrapper>
        <S.Label>판매가격</S.Label>
        <S.Subject
          type="number"
          placeholder="(필수) 판매가격을 작성해주세요."
          onChange={props.onChangePrice}
        />
        <S.Error>{priceError}</S.Error>
      </S.InputWrapper>
      {/* 태그입력 */}
      <S.TagWrapper>
        <S.Label>태그입력</S.Label>
        <S.TagRBox>
          <S.Subject
            type="text"
            placeholder="(필수) 태그를 선택해주세요"
            onKeyUp={props.onChangeTags}
          />
          <S.Span>
            {props.hashArr.map((el, idx) => (
              <S.Text key={idx}>{el}</S.Text>
            ))}
          </S.Span>
        </S.TagRBox>
      </S.TagWrapper>
      {/* 거래위치 */}
      <S.InputWrapper>
        <S.Label>거래위치</S.Label>
        <KakaoMapPage />
        <S.ZonecodeWrapper>
          <S.Longitude readOnly value={lat} />
          <S.Latitude readOnly value={lng} />
          <S.SearchButton onClick={props.onClickAddressSearch} type="button">
            우편번호 검색
          </S.SearchButton>
          {props.isOpen && (
            <Modal
              visible={props.isOpen}
              onOk={props.onClickAddressSearch}
              onCancel={props.onClickAddressSearch}
              width={800}
              closeIcon={<SmileOutlined />}
            >
              <DaumPostcode onComplete={props.onCompleteAddressSearch} />
            </Modal>
          )}
        </S.ZonecodeWrapper>
        <S.Addressbasic
          readOnly
          value={
            props.address ||
            props.data?.createUseditem.useditemAddress?.address ||
            "(선택) 주소를 선택해주세요."
          }
        />
        <S.AddressDetail
          placeholder="(선택) 상세 주소를 입력해주세요."
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.addressDetail ||
            props.data?.createUseditem.useditemAddress?.addressDetail ||
            ""
          }
        />
      </S.InputWrapper>

      <S.ImageWrapper>
        <S.ImageTitle>사진 첨부</S.ImageTitle>
        {props.fileUrls.map((el, index) => (
          <Uploads01
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))}
        {/* <GraphqlMutationPageUI fileRef /> */}
      </S.ImageWrapper>

      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>

      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
