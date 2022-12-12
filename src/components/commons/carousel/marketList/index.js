import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slick = styled(Slider)`
  width: 242px;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const Image = styled.img`
  width: 242px;
  height: 242px;
  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarketListCarousel = (pr) => {
  const settings = {
    // 리스트 모양 보여주기
    dots: false,
    // 무제한으로 돌릴꺼야?
    infinite: true,
    // 넘어가는 속도
    speed: 5000,
    // 사진 몇개 보여줄꺼야?
    slidesToShow: 1,
    // 몇 개씩 넘길꺼야?
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0o0,
    // cssEase: 'ease',
  };

  const result = pr.data?.filter((ee) => ee);

  return (
    <Wrapper>
      <Slick {...settings}>
        {result?.map((el) => (
          <Image key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
        ))}
      </Slick>
    </Wrapper>
  );
};

export default MarketListCarousel;
