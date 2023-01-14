import { MouseEvent, useState } from "react";
import Pagination01UI from "./Pagubatuibs01.presenter";
import { IPropsCon } from "./Pagubatuibs01.types";

const Pagination01 = (pr: IPropsCon) => {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = pr.BoardsCountDate?.fetchBoardsCount
    ? Math.ceil(pr.BoardsCountDate?.fetchBoardsCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    pr.refetchBoards({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    pr.refetchBoards({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivedPage(startPage + 10);
    pr.refetchBoards({ page: startPage + 10 });
  };

  return (
    <Pagination01UI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
};

export default Pagination01;
