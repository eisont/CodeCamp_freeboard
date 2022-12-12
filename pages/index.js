import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { CodeCampLogosvg } from "../src/commons/styles/Imgsvg";

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.isHover ? "#fff" : "#000")};
`;

const Button = styled.div`
  cursor: pointer;
`;

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };

  const router = useRouter();
  const onClickMainpage = () => {
    router.push("/boards");
  };

  return (
    <Wrapper isHover={isHover}>
      <Button
        onClick={onClickMainpage}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <CodeCampLogosvg width="900" fill={isHover ? "#000" : "#fff"} />
      </Button>
    </Wrapper>
  );
};

export default Home;
