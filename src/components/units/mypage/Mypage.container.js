import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { withAuth } from '../../commons/hocs/withAuth';
import MypageUIpage from './Mypage.presenter';
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, FETCH_USER_LOGGED_IN, D_FETCH_USER_LOGGED_IN } from './Mypage.queries';

const MypagePage = () => {
  // 내 장터
  const [myMarketsItems, setMyMarketsItems] = useState(true);
  // 내 포인트
  const [myPoint, setMyPoint] = useState(false);
  // 내 프로필
  const [myProfile, setMyProfile] = useState(false);

  const [DloggedInUser, setDLoggedInUser] = useState('');
  // const { data: loggedInUser } = useQuery(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  useEffect(() => {
    D_FETCH_USER_LOGGED_IN().then((result) => {
      setDLoggedInUser(result.data);
    });
  }, []);

  //
  const onClickResult = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: '' },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // 내 장터
  const onClickMyMarketItems = () => {
    setMyMarketsItems(true);
    setMyPoint(false);
    setMyProfile(false);
  };
  // 내 포인트
  const onClickMyPoint = () => {
    setMyMarketsItems(false);
    setMyPoint(true);
    setMyProfile(false);
  };
  // 내 프로필
  const onClickMyProfile = () => {
    setMyMarketsItems(false);
    setMyPoint(false);
    setMyProfile(true);
  };

  return (
    <MypageUIpage
      myMarketsItems={myMarketsItems}
      myPoint={myPoint}
      myProfile={myProfile}
      loggedInUser={DloggedInUser?.fetchUserLoggedIn}
      onClickResult={onClickResult}
      onClickMyMarketItems={onClickMyMarketItems}
      onClickMyPoint={onClickMyPoint}
      onClickMyProfile={onClickMyProfile}
    />
  );
};

export default withAuth(MypagePage);
