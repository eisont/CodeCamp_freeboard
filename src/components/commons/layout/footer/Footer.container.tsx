import { Instagramsvg } from "../../../../commons/styles/Iconsvg";
import * as S from "./Footer.styled";

const LayoutFooter = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Text>FOOTER</S.Text>
        <S.SnSBox>
          <Instagramsvg width="32" height="32" fill="#bdbdbdb" />
        </S.SnSBox>
        <S.Hr />
        <S.InfoText>@2022 chihuni portfolio</S.InfoText>
      </S.Body>
    </S.Wrapper>
  );
};

export default LayoutFooter;
