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
  width: 400px;

  .slick-prev {
    z-index: 1;
    left: -60px;

    &::before {
      font-size: 36px;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  .slick-next {
    z-index: 1;
    right: -40px;

    &::before {
      font-size: 36px;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Image = styled.img`
  width: 296px;
  height: 296px;
  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarketDetailCarousel = (pr) => {
  const result = pr.data?.filter((ee) => ee);

  // const customPaging = () => {
  //   return (
  //     <a>
  //       {result?.map((el: any) => (
  //         <img key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
  //       ))}
  //     </a>
  //   );
  // };

  const settings = {
    // customPaging: function (index: any) {
    //   return (
    //     <Link>
    //       {result?.map((el: any) => (
    //         <SImage
    //           key={uuidv4()}
    //           src={`https://storage.googleapis.com/${el}`}
    //         />
    //       ))}
    //     </Link>
    //   );
    // },
    // 리스트 모양 보여주기
    dots: true,
    dotsClass: "slick-dots slick-thumb",
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

export default MarketDetailCarousel;
