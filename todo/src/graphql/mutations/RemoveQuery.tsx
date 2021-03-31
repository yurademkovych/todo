import { gql } from "@apollo/client";

const REMOVE_QUERY = gql`
    mutation RemoveTodo($id: ID!) {
        removeTodo(id: $id) {
        id
    }
} 
`

export default REMOVE_QUERY;