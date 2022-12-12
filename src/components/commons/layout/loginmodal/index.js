import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { Modal } from "../../../../commons/store";
import { Closesvg } from "../../../../commons/styles/Iconsvg";
import { CodeCampLogosvg } from "../../../../commons/styles/Imgsvg";

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-232px, -153px);
  z-index: 8888;
  width: 464px;
  height: 306px;
  background: #fff;
  border-radius: 16px;
  display: ${(pr) => (pr.modal ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CloseIcon = styled.div`
  position: absolute;
  top: 23.5px;
  right: 23.5px;
  cursor: pointer;
`;
const Text = styled.div`
  margin: 40px 0;
  color: #000;
  font-weight: 400;
  font-size: 22px;
`;
const Bt = styled.div`
  width: 384px;
  height: 64px;
  border-radius: 16px;
  background: #ffd600;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

const Modal1 = (pr) => {
  const [modal, setModal] = useRecoilState(Modal);
  const onClickClose = () => {
    setModal(false);
  };
  return (
    <Wrapper modal={modal}>
      <CloseIcon onClick={onClickClose}>
        <Closesvg width="22" height="22" fill="#000" />
      </CloseIcon>
      <CodeCampLogosvg width="236" height="36" fill="#000" />

      <Text>{pr.Title !== undefined ? pr.Title : "로그인이 필요합니다."}</Text>
      <Bt onClick={onClickClose}>확인</Bt>
    </Wrapper>
  );
};

export default Modal1;
