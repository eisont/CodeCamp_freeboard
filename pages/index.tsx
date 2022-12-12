import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  &: hover {
    filter: invert(100%);
    transition: 1s;
  }
`;

const ChanelImg = styled.div`
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/330px-Chanel_logo.svg.png");
  height: 300px;
  padding: 30vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;
const BackgroundImg = styled.div`
  text-align: center;
`;
export default function Home() {
  const router = useRouter();
  const Mainpage = () => {
    router.push("/markets");
  };

  return (
    <Wrapper>
      <BackgroundImg>
        <ChanelImg onClick={Mainpage}></ChanelImg>
      </BackgroundImg>
    </Wrapper>
  );
}
