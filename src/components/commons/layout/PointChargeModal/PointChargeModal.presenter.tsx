import {
  Closesvg,
  PointChargeIconsvg,
  SelectArrow,
} from "../../../../commons/styles/Iconsvg";
import * as S from "./PointChargeModal.style";
import { v4 as uuidv4 } from "uuid";

const PointChargeModalUI = (props: any) => {
  return (
    <S.ChargeModal>
      <S.TopBox>
        <div onClick={props.onClickClose} style={{ cursor: "pointer" }}>
          <Closesvg width="16" height="16" fill="#000" />
        </div>
      </S.TopBox>

      <S.IconBox>
        <PointChargeIconsvg
          width="80"
          height="54"
          pigfill="#ffd600"
          fill="#000"
        />
      </S.IconBox>

      <S.ModalText>충전하실 금액을 선택해주세요!</S.ModalText>

      <S.SelectedBox onClick={props.onClickOpen}>
        <S.Text>
          {props.chargePrice === 0 ? (
            "포인트 선택"
          ) : (
            <S.Bold>{props.chargePrice} 원</S.Bold>
          )}
        </S.Text>
        {props.isOpen ? (
          <div style={{ transform: "rotate(180deg)" }}>
            <SelectArrow width="18" height="10" fill="#000" />
          </div>
        ) : (
          <div>
            <SelectArrow width="18" height="10" fill="#000" />
          </div>
        )}
      </S.SelectedBox>

      {props.isOpen && (
        <S.SelectBox onClick={props.onChangePoint}>
          {props.PointSelectObject.map((row: any) => (
            <S.Row key={uuidv4()} id={row.id}>
              {row.Point}
            </S.Row>
          ))}
        </S.SelectBox>
      )}

      {props.chargePrice === 0 ? (
        <S.ChargeBt chargePrice={props.chargePrice}>충전하기</S.ChargeBt>
      ) : (
        <S.ChargeBt
          onClick={props.onClickPoint}
          chargePrice={props.chargePrice}
        >
          충전하기
        </S.ChargeBt>
      )}
    </S.ChargeModal>
  );
};

export default PointChargeModalUI;
