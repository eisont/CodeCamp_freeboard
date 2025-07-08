import { GraphQLClient, gql } from 'graphql-request';

// const RESTORE_ACCESS_TOKEN = gql`
//   mutation restoreAccessToken {
//     restoreAccessToken {
//       accessToken
//     }
//   }
// `;

// export const getAccessToken = async () => {
//   try {
//     const graphQLClient = new GraphQLClient('https://backend11.codebootcamp.co.kr/graphql', {
//       credentials: 'include',
//     });
//     const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
//     const newAccessToken = result.restoreAccessToken.accessToken;
//     return newAccessToken;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const getAccessToken = async () => {
  try {
    // 실제 요청 없이 바로 mock 데이터 반환
    const newAccessToken = 'mock-access-token-1234';
    console.log('[더미 토큰 발급] accessToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log('[더미 accessToken 에러]', error.message);
  }
};
