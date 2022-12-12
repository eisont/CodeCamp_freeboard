import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $startDate: DateTime
    $endDate: DateTime
    $page: Int
    $search: String
  ) {
    fetchBoards(
      startDate: $startDate
      endDate: $endDate
      page: $page
      search: $search
    ) {
      _id
      writer
      title
      images
      contents
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
  ) {
    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      user {
        _id
        name
        picture
      }
      createdAt
    }
  }
`;
