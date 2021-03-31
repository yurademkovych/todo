import { gql } from "@apollo/client";

const UPDATE_QUERY = gql`
    mutation UpdateTodo($id: ID!) {
        updateTodo(id: $id) {
        completed
    }
} 
`

export default UPDATE_QUERY;