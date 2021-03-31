import { useCallback } from "react"
import { useMutation } from "@apollo/client";
import TODO_QUERY from '../../graphql/queries/TodoQuery';
import ADD_QUERY from '../../graphql/mutations/AddQuery';

const useAddTodo = () => {

    const [addTodo] = useMutation(ADD_QUERY, {refetchQueries: [{ query: TODO_QUERY }]});
    const addHandler = useCallback(async(title: string):
    Promise<{ title: string } | any > => {
        if(title.length === 0 ) {
            return null;
        }
        try { 
            await addTodo({variables: {todo: {title} }});
            return title;
        }
       catch (err) {
           alert(JSON.stringify(err.message))
        }
    },[addTodo]);

    return addHandler;
}

export default useAddTodo