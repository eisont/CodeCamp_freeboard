import styled from "@emotion/styled";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { Maybe } from "../../../../path/to/types/generated/types";

const Slick = styled(Slider)`
  width: 282px;
  height: 120px;

  .slick-prev:before,
  .slick-next:before {
    color: rgba(0, 0, 0, 0.2);
    display: none;
  }
`;

const Image = styled.img`
  width: 282px;
  height: 120px;
  object-fit: contain;
`;

interface IProps {
  images?: Maybe<string[]> | undefined;
}

const BestBoardCarousel = (pr: IProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0o0,
  };

  const result = pr.images?.filter((ee: string) => ee);

  return (
    <Slick {...settings}>
      {result?.map((el) => (
        <Image key={uuidv4()} src={`https://storage.googleapis.com/${el}`} />
      ))}
    </Slick>
  );
};

export default BestBoardCarousel;
