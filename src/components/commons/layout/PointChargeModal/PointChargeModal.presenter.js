import {
  Closesvg,
  PointChargeIconsvg,
  SelectArrow,
} from "../../../../commons/styles/Iconsvg";
import * as S from "./PointChargeModal.style";
import { v4 as uuidv4 } from "uuid";

const PointChargeModalUI = (pr) => {
  return (
    <S.ChargeModal>
      <S.TopBox>
        <div onClick={pr.onClickClose} style={{ cursor: "pointer" }}>
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

      <S.SelectedBox onClick={pr.onClickOpen}>
        <S.Text>
          {pr.chargePrice === 0 ? (
            "포인트 선택"
          ) : (
            <S.Bold>{pr.chargePrice} 원</S.Bold>
          )}
        </S.Text>
        {pr.isOpen ? (
          <div style={{ transform: "rotate(180deg)" }}>
            <SelectArrow width="18" height="10" fill="#000" />
          </div>
        ) : (
          <div>
            <SelectArrow width="18" height="10" fill="#000" />
          </div>
        )}
      </S.SelectedBox>

      {pr.isOpen && (
        <S.SelectBox onClick={pr.onChangePoint}>
          {pr.PointSelectObject.map((row) => (
            <S.Row key={uuidv4()} id={row.id}>
              {row.Point}
            </S.Row>
          ))}
        </S.SelectBox>
      )}

      {pr.chargePrice === 0 ? (
        <S.ChargeBt chargePrice={pr.chargePrice}>충전하기</S.ChargeBt>
      ) : (
        <S.ChargeBt onClick={pr.onClickPoint} chargePrice={pr.chargePrice}>
          충전하기
        </S.ChargeBt>
      )}
    </S.ChargeModal>
  );
};

export default PointChargeModalUI;
