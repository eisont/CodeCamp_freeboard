// 오늘 본 상품
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../commons/store";
import * as S from "./WatchProduct.style";
import { v4 as uuidv4 } from "uuid";
import { Heartsvg } from "../../../commons/styles/Iconsvg";
import { PointComma } from "../../../commons/libraries/point";

const WatchProduct = () => {
  const [watchProduct] = useRecoilState(WatchProductState);

  useEffect(() => {
    JSON.parse(localStorage.getItem("watch") || "[]");
  }, []);

  return (
    <S.Wrapper>
      <S.Text>최근 본 상품</S.Text>
      {watchProduct?.map((el) => (
        <S.BestWrapper key={uuidv4()}>
          <S.PickCount>
            <Heartsvg
              margin="0 5.5px 0 0"
              width="15"
              height="13.76"
              fill="#ffd600"
            />
            <S.Num>{el?.pickedCount}</S.Num>
          </S.PickCount>
          <S.Image
            src={
              el?.images[0]
                ? `https://storage.googleapis.com/${el.images[0]}`
                : "http://eumseongcci.korcham.net/images/no-image01.gif"
            }
          />
          <S.Name>{el?.name}</S.Name>
          <S.Remarks>{el?.remarks}</S.Remarks>
          <S.Price>{PointComma(el?.price)} 원</S.Price>
          <S.Tags>
            {el?.tags?.map((tag) => (
              <S.Tag key={uuidv4()}>{tag}</S.Tag>
            ))}
          </S.Tags>
        </S.BestWrapper>
      ))}
    </S.Wrapper>
  );
};
export default WatchProduct;
