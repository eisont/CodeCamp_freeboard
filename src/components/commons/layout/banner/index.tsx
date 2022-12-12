import styled from "@emotion/styled";
import Slider from "react-slick";
// import { baseUrl } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.2);

  /* chanel 사진 */
  /* background: url("https://www.chanel.com/apac/img/t_one/q_auto:good,fl_lossy,dpr_1.2,f_auto/w_1920/prd-emea/sys-master/content/h6a/h17/8914196627486-2880x900_LOGO_CENTRE.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
`;
const Slick = styled(Slider)`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 400px;

  .slick-prev {
    z-index: 1;
    left: 20%;

    &::before {
      font-size: 48px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .slick-next {
    z-index: 1;
    right: 20%;

    &::before {
      font-size: 48px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .slick-dots {
    bottom: 19px;

    li button:before {
      color: #fff;
      font-size: 18px;
    }
  }
`;
const DogImg = styled.img`
  height: 400px;
  object-fit: cover;
`;

export default function LayoutBanner() {
  const settings = {
    // 리스트 모양 보여주기
    dots: true,
    // 무제한으로 돌릴꺼야?
    infinite: false,
    // 넘어가는 속도
    speed: 1000,
    // 사진 몇개 보여줄꺼야?
    slidesToShow: 1,
    // 몇 개씩 넘길꺼야?
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 0o0,
    cssEase: "ease",
  };

  return (
    <Wrapper>
      <Slick {...settings}>
        <DogImg src="./carousel_1.png" />
        <DogImg src="./carousel_2.png" />
        <DogImg src="./carousel_3.png" />
        <DogImg src="./carousel_4.png" />

        {/*
        샤넬 모델 사진
        <div>
          <DogImg src="https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h28-hd7-9485373636638look-001-metiers-art-2021-22-chanel-show.jpg" />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-ha9-hcf-9485373898782look-002-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h57-hd0-9485373833246look-003-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-hf6-he0-9485373374494look-004-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h86-heb-9485373046814look-005-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h11-hc6-9485372850206look-006-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h0f-hc9-9485372915742look-007-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h4c-h41-9485371080734look-008-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h57-h14-9485370654750look-009-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h74-he8-9485373112350look-011-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h00-hc3-9485372784670look-012-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-he7-hda-9485373505566look-014-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h25-hda-9485373571102look-015-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h98-hcc-9485373964318look-016-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h25-h1e-9485370392606look-018-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h27-h1b-9485370458142look-019-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h8b-h40-9485371015198look-020-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h45-h11-9485370720286look-021-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h5b-h47-9485371211806look-022-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h09-h48-9485371277342look-023-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-he4-h21-9485370261534look-024-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h67-h17-9485370589214look-025-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-ha3-h25-9485370130462look-026-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-hb5-h28-9485370064926look-027-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-he5-hdd-9485373440030look-028-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h16-hd4-9485373702174look-029-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-he6-h1e-9485370327070look-030-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-h16-h18-9485370523678look-031-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-hf5-h24-9485370195998look-032-metiers-art-2021-22-chanel-show.jpg " />
        </div>
        <div>
          <DogImg src=" https://www.chanel.com/apac/img//t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_250//prd-emea/sys-master-content-hc8-hde-9485369999390look-033-metiers-art-2021-22-chanel-show.jpg " />
        </div> */}
      </Slick>
    </Wrapper>
  );
}
