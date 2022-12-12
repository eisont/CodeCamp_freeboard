import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { AccessTokenState, Modal, restoreAccessTokenLoadable } from '../../../commons/store';

// {}, return 이 있지만 한 줄이라 생략
// @ts-ignore
// ts 무시
export const withAuth = (Component) => (pr) => {
  const router = useRouter();
  const [, setModal] = useRecoilState(Modal);

  const [accessToken] = useRecoilState(AccessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          setModal(true);
          router.push('/login');
        }
      });
    }
  }, []);

  return <Component {...pr} />;
};
