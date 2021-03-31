import { gql } from "@apollo/client";

const TODO_QUERY = gql`
query AllTodos {
    getAllTodos {
        id
        title
        completed 
    }
}
`

export default TODO_QUERY;