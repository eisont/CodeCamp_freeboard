// 게시판 목록 container

import BoardListUI from './BoardList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, D_FETCH_BOARDS, D_FETCH_BOARDS_COUNT, FETCH_BOARDS_COUNT, FETCH_BOARDS_OF_THE_BEST, D_FETCH_BOARDS_OF_THE_BEST } from './BoardList.queries';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BoardList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [DFetchBoardsOfTheBestdata, setDFetchBoardsOfTheBestdata] = useState('');
  const [DfetchBoardsData, setFetchBoardsData] = useState('');
  const [DdataBoardsCount, setDdataBoardsCount] = useState('');

  // 베스트 게시물
  // const { data: BestBoards } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  // 더미 베스트 게시물
  useEffect(() => {
    D_FETCH_BOARDS_OF_THE_BEST().then((result) => {
      setDFetchBoardsOfTheBestdata(result.data);
    });
  }, []);

  // 게시물 리스트
  // const { data: fetchBoardsData, refetch } = useQuery(FETCH_BOARDS, {
  //   variables: {
  //     search: keyword,
  //   },
  // });

  // 더미 자유게시판 게시글 목록 리스트
  // refetch 흉내 낼 함수
  const refetch = async () => {
    const result = await D_FETCH_BOARDS();
    setFetchBoardsData(result.data);
  };
  useEffect(() => {
    refetch();
  }, [keyword]);

  // 게시물 리스트 갯수
  // const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(FETCH_BOARDS_COUNT, {
  //   variables: {
  //     // startDate,
  //     // endDate,
  //     search: keyword,
  //   },
  // });
  const refetchBoardsCount = async () => {
    const result = await D_FETCH_BOARDS_COUNT();
    setDdataBoardsCount(result.data);
  };
  useEffect(() => {
    refetchBoardsCount();
  }, []);

  // 각각 게시물 들어가기
  const onClickMoveToBoardDetail = (event) => {
    if (event.target instanceof Element) router.push(`/boards/${event.currentTarget.id}`);
  };

  // 게시물 생성버튼기능
  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  return (
    <BoardListUI
      // fetchBoardsData={fetchBoardsData}
      fetchBoardsData={DfetchBoardsData} // 더미데이터
      refetch={refetch}
      // BestBoards={BestBoards?.fetchBoardsOfTheBest}
      BestBoards={DFetchBoardsOfTheBestdata?.fetchBoardsOfTheBest} //더미데이터
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetchBoardsCount={refetchBoardsCount}
      count={DdataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      setKeyword={setKeyword}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
};

export default BoardList;
