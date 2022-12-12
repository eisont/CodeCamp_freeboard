import { PagenationArrowsvg } from "../../../../../commons/styles/Iconsvg";
import * as S from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <S.Wrapper>
      <S.Page>
        <PagenationArrowsvg width="8" height="12" fill="#000" />
      </S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <S.Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </S.Page>
          )
      )}
      <S.Page rotate="rotate(180deg)">
        <PagenationArrowsvg width="8" height="12" fill="#000" />
      </S.Page>
    </S.Wrapper>
  );
}
