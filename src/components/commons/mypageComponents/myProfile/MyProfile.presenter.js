import { Hidesvg, Showsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./MyProfile.styles";

const MyProfileUI = (pr) => {
  return (
    <S.Section>
      <S.Title>비밀번호 변경</S.Title>
      <S.FlexBox>
        <S.Text>현재 비밀번호</S.Text>
        <S.InputFlexBox>
          <S.Input
            type={pr.showPresentPassword ? "text" : "password"}
            placeholder="현재 비밀번호를 입력해 주세요."
          />
          {pr.showPresentPassword ? (
            <S.ClickBt onClick={pr.onClickShowPresentPassword}>
              <Hidesvg width="20" height="18" stroke="#130f26" />
            </S.ClickBt>
          ) : (
            <S.ClickBt onClick={pr.onClickShowPresentPassword}>
              <Showsvg width="20" height="17" stroke="#130f26" />
            </S.ClickBt>
          )}
        </S.InputFlexBox>
      </S.FlexBox>

      <S.FlexBox>
        <S.Text>새 비밀번호</S.Text>
        <S.InputFlexBox>
          <S.Input
            type={pr.showNewPassword ? "text" : "password"}
            placeholder="새 비밀번호를 입력해주세요."
            onChange={pr.onChangePassword}
          />
          {pr.showNewPassword ? (
            <S.ClickBt onClick={pr.onClickShowNewPassword}>
              <Hidesvg width="20" height="18" stroke="#130f26" />
            </S.ClickBt>
          ) : (
            <S.ClickBt onClick={pr.onClickShowNewPassword}>
              <Showsvg width="20" height="17" stroke="#130f26" />
            </S.ClickBt>
          )}
        </S.InputFlexBox>
      </S.FlexBox>

      <S.FlexBox>
        <S.Text>새 비밀번호 확인</S.Text>
        <S.ColumnBox>
          <S.InputFlexBox>
            <S.Input
              type={pr.showCheckPassword ? "text" : "password"}
              placeholder="새 비밀번호를 확인해주세요."
              onChange={pr.onChangePasswordCheck}
            />
            {pr.showCheckPassword ? (
              <S.ClickBt onClick={pr.onClickShowCheckPassword}>
                <Hidesvg width="20" height="18" stroke="#130f26" />
              </S.ClickBt>
            ) : (
              <S.ClickBt onClick={pr.onClickShowCheckPassword}>
                <Showsvg width="20" height="17" stroke="#130f26" />
              </S.ClickBt>
            )}
          </S.InputFlexBox>

          {pr.password !== pr.passwordCheck ? (
            <S.Error color="red">비밀번호가 일치하지 않습니다.</S.Error>
          ) : (
            <S.Error color="#04fc46e2">비밀번호가 일치합니다.</S.Error>
          )}
        </S.ColumnBox>
      </S.FlexBox>

      <S.RightBox>
        <S.Button onClick={pr.onClickResetPassword}>비밀번호 변경</S.Button>
      </S.RightBox>
    </S.Section>
  );
};

export default MyProfileUI;
