import * as S from "./MyMarketItems.styles";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import { PointComma } from "../../../../commons/libraries/point";
import { getDatecomma } from "../../../../commons/libraries/utils";
import Paginations01 from "../../paginations/paginations/01/Paginations01.container";

const MyMarketsItemsUI = (pr) => {
  return (
    <S.Section>
      <S.SectionHead>
        <S.MenuBox>
          <S.MyItems onClick={pr.onClickMyItems} myItems={pr.myItems}>
            나의 상품
          </S.MyItems>
          <S.Hrs />
          <S.MyPicked onClick={pr.onClickMyPicked} myPicked={pr.myPicked}>
            마이 찜
          </S.MyPicked>
        </S.MenuBox>
      </S.SectionHead>

      <S.SectionMain>
        {pr.myItems && !pr.myPicked && (
          <>
            <S.Row5Th>
              <S.Th>번호</S.Th>
              <S.Th>상품명</S.Th>
              <S.Th></S.Th>
              <S.Th>판매가격</S.Th>
              <S.Th>날짜</S.Th>
            </S.Row5Th>

            {pr.IsoldData?.map((el, index) => (
              <S.Row5 onClick={pr.onClickID} key={uuidv4()} id={el?._id}>
                <S.Td>{index + 1}</S.Td>

                {el?.contents === "" ? (
                  <S.Td>상품 설명이 없습니다.</S.Td>
                ) : (
                  <>
                    {typeof window !== "undefined" && (
                      <S.Td
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(String(el?.contents)),
                        }}
                      />
                    )}
                  </>
                )}

                {el?.buyer !== null ? (
                  <S.Td style={{ color: "#FFD600", fontWeight: "700" }}>
                    판매 완료
                  </S.Td>
                ) : (
                  <S.Td />
                )}
                <S.Td>￦ {PointComma(el?.price)}</S.Td>
                <S.Td>{getDatecomma(el?.createdAt)}</S.Td>
              </S.Row5>
            ))}
          </>
        )}

        {!pr.myItems && pr.myPicked && (
          <>
            <S.Row6Th>
              <S.Th>번호</S.Th>
              <S.Th>상품명</S.Th>
              <S.Th></S.Th>
              <S.Th>판매가격</S.Th>
              <S.Th>판매자</S.Th>
              <S.Th>날짜</S.Th>
            </S.Row6Th>
            {pr.pickData?.map((el, index) => (
              <S.Row6 onClick={pr.onClickID} key={uuidv4()} id={el?._id}>
                <S.Td>{index + 1}</S.Td>

                {typeof window !== "undefined" && (
                  <S.Td
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(String(el?.contents)),
                    }}
                  />
                )}
                {el?.buyer !== null ? (
                  <S.Td style={{ color: "#FFD600", fontWeight: "700" }}>
                    판매 완료
                  </S.Td>
                ) : (
                  <S.Td />
                )}
                <S.Td>￦ {PointComma(el?.price)}</S.Td>
                <S.Td>{el?.seller?.name}</S.Td>
                <S.Td>{getDatecomma(el?.createdAt)}</S.Td>
              </S.Row6>
            ))}
          </>
        )}
      </S.SectionMain>

      {pr.myItems && !pr.myPicked && (
        <div style={{ margin: "40px 0" }}>
          <Paginations01 count={pr.soldCountData} refetch={pr.ISoldRefetch} />
        </div>
      )}
      {!pr.myItems && pr.myPicked && (
        <div style={{ margin: "40px 0" }}>
          <Paginations01 count={pr.pickCountData} refetch={pr.IPickedRefetch} />
        </div>
      )}
    </S.Section>
  );
};

export default MyMarketsItemsUI;
