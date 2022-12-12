import { Hidesvg, Showsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./MyProfile.style";

const MyProfileUI = (props: any) => {
  return (
    <S.Section>
      <S.Title>비밀번호 변경</S.Title>
      <S.FlexBox>
        <S.Text>현재 비밀번호</S.Text>
        <S.InputFlexBox>
          <S.Input
            type={props.showPresentPassword ? "text" : "password"}
            placeholder="현재 비밀번호를 입력해 주세요."
          />
          {props.showPresentPassword ? (
            <S.ClickBt onClick={props.onClickShowPresentPassword}>
              <Hidesvg width="20" height="18" stroke="#130f26" />
            </S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowPresentPassword}>
              <Showsvg width="20" height="17" stroke="#130f26" />
            </S.ClickBt>
          )}
        </S.InputFlexBox>
      </S.FlexBox>

      <S.FlexBox>
        <S.Text>새 비밀번호</S.Text>
        <S.InputFlexBox>
          <S.Input
            type={props.showNewPassword ? "text" : "password"}
            placeholder="새 비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          {props.showNewPassword ? (
            <S.ClickBt onClick={props.onClickShowNewPassword}>
              <Hidesvg width="20" height="18" stroke="#130f26" />
            </S.ClickBt>
          ) : (
            <S.ClickBt onClick={props.onClickShowNewPassword}>
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
              type={props.showCheckPassword ? "text" : "password"}
              placeholder="새 비밀번호를 확인해주세요."
              onChange={props.onChangePasswordCheck}
            />
            {props.showCheckPassword ? (
              <S.ClickBt onClick={props.onClickShowCheckPassword}>
                <Hidesvg width="20" height="18" stroke="#130f26" />
              </S.ClickBt>
            ) : (
              <S.ClickBt onClick={props.onClickShowCheckPassword}>
                <Showsvg width="20" height="17" stroke="#130f26" />
              </S.ClickBt>
            )}
          </S.InputFlexBox>

          {props.password !== props.passwordCheck ? (
            <S.Error color="red">비밀번호가 일치하지 않습니다.</S.Error>
          ) : (
            <S.Error color="#04fc46e2">비밀번호가 일치합니다.</S.Error>
          )}
        </S.ColumnBox>
      </S.FlexBox>

      <S.RightBox>
        <S.Button onClick={props.onClickResetPassword}>비밀번호 변경</S.Button>
      </S.RightBox>
    </S.Section>
  );
};

export default MyProfileUI;
