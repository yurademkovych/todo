import { gql } from "@apollo/client";

const ADD_QUERY = gql`
mutation AddTodo($todo: TodoInput!) {
    addTodo(todo: $todo) {
    title
    }
}      
`

export default ADD_QUERY;