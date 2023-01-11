import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AccessTokenState } from '../../../../src/commons/store';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { onError } from '@apollo/client/link/error';

interface IAppProps {
  children: ReactNode;
}
const ApolloSetting = (props: IAppProps) => {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://backend09.codebootcamp.co.kr/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
