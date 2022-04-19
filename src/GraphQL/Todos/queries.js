import { gql } from "@apollo/client";

export const getAllTodos = gql`
  query getAllTodos {
    todos {
      id
      is_done
      title
    }
  }
`;

export const getTodosByUserId = gql`
  query getTodosByUserId($_eq: Int!) {
    todos(where: { user: { id: { _eq: $_eq } } }) {
      id
      is_done
      title
    }
  }
`;
