import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Info = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2vh;
  text-align: center;
`;
const Span = styled.span`
  font-size: 2.5vh;
  font-weight: 700;
`;
const Text = styled.div`
  font-size: 2vh;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
      createdAt
    }
  }
`;

export default function LoginUserbar() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <Info>
      {data?.fetchUserLoggedIn.name ? (
        <Text>
          <Span>{data?.fetchUserLoggedIn.name}</Span> 환영해요!!!
        </Text>
      ) : (
        ""
      )}
    </Info>
  );
}
