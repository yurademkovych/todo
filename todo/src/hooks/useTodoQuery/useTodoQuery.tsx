import TODO_QUERY from '../../graphql/queries/TodoQuery';
import { useQuery } from "@apollo/client";

const useTodoQuery = () => {
    const todoQuery = useQuery(TODO_QUERY);
    return todoQuery;
}

export default useTodoQuery
