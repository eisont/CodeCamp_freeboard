import { useState } from 'react';
import styled from '@emotion/styled';
import { CodeCampLogosvg } from '../src/commons/styles/Imgsvg';
import { useRouter } from 'next/router';

interface IProps {
  isHover: Boolean;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props: IProps) => (props.isHover ? '#fff' : '#000')};
`;

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };

  const onclickMainPage = () => {
    router.push('/boards');
  };

  return (
    <Wrapper isHover={isHover}>
      <Button onClick={onclickMainPage} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <CodeCampLogosvg width='900' fill={isHover ? '#000' : '#fff'} />
      </Button>
    </Wrapper>
  );
};

export default Home;
