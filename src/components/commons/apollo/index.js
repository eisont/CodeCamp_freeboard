import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AccessTokenState } from '../../../commons/store';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { onError } from '@apollo/client/link/error';

const ApolloSetting = (pr) => {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === 'UNAUTHENTICATED') {
  //         getAccessToken().then((newAccessToken) => {
  //           setAccessToken(newAccessToken);

  //           operation.setContext({
  //             headers: {
  //               ...operation.getContext().headers,
  //               Authorization: `Bearer ${newAccessToken}`,
  //             },
  //           });
  //           return forward(operation);
  //         });
  //       }
  //     }
  //   }
  // });

  // const uploadLink = createUploadLink({
  //   uri: 'https://backend11.codebootcamp.co.kr/graphql',
  //   headers: { Authorization: `Bearer ${accessToken}` },
  //   credentials: 'include',
  // });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // link: ApolloLink.from([errorLink, uploadLink]),
  });

  // 이렇게 주석 처리하면 apollo 자체는 살아있고, useQuery, useMutation은 실제로는 동작 안 함.

  return <ApolloProvider client={client}>{pr.children}</ApolloProvider>;
};

export default ApolloSetting;
