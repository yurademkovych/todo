import { useMutation } from "@apollo/client";
import TODO_QUERY from '../../graphql/queries/TodoQuery';
import UPDATE_QUERY from '../../graphql/mutations/UpdateQuery';

const useUpdateTodo = () => {

    const [updateTodo] = useMutation(UPDATE_QUERY, {refetchQueries: [{ query: TODO_QUERY }]});
    const updateHandler = async (id) => {
        try {
            await updateTodo({variables: {id} });
            return id;
        }
        catch(err) {
            alert(JSON.stringify(err.message));
        }
    };

    return updateHandler;
}

export default useUpdateTodo