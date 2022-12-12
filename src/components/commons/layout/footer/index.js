import { Instagramsvg } from "../../../../commons/styles/Iconsvg";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 285px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;

const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: #828282;
`;

const SnSBox = styled.div`
  margin: 40px 0;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Hr = styled.div`
  margin: 0 0 40px 0;
  width: 1200px;
  height: 1px;
  background: #bdbdbd;
`;
const InfoText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

const LayoutFooter = () => {
  return (
    <Wrapper>
      <Body>
        <Text>FOOTER</Text>
        <SnSBox>
          <Instagramsvg width="32" height="32" fill="#bdbdbdb" />
        </SnSBox>
        <Hr />
        <InfoText>@2022 chihuni portfolio</InfoText>
      </Body>
    </Wrapper>
  );
};

export default LayoutFooter;
