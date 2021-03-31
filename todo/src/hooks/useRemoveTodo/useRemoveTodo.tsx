import { useCallback } from "react"
import { useMutation } from "@apollo/client";
import TODO_QUERY from '../../graphql/queries/TodoQuery';
import REMOVE_QUERY from '../../graphql/mutations/RemoveQuery';

const useRemoveTodo = () => {

    const [removeTodo] = useMutation(REMOVE_QUERY, {refetchQueries: [{ query: TODO_QUERY }]});
    const removeHandler = useCallback(async(id: string):
    Promise<{ id: string } | any > => {
        try { 
            await removeTodo( {variables: {id} } )
            return id;
        }
       catch (err) {
           alert(JSON.stringify(err.message))
        }
    },[removeTodo]);

    return removeHandler;
}

export default useRemoveTodo


