import React from "react";
import { useQuery } from "@apollo/client";
import TodoForm from "../TodoForm/TodoForm";
import ListItem from "../ListItem/ListItem";
import NavBar from "../../styles/Navbar";
import TODO_QUERY from '../../graphql/queries/TodoQuery';

function App() {
    const { data, loading, error } = useQuery(TODO_QUERY);
    if (loading) return <p>Loading ...</p>;
    if (error) return (<p>{JSON.stringify(error.message)}</p>)
    const todos = data.getAllTodos;
    
    return (
        <div className="App">
            <NavBar />
            <TodoForm />
            <ul>
            {todos.map((todo) => {
                return (
                    <ListItem
                        title={todo.title}
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                    />
                );
            })}
        </ul>
        </div>
    );
}

export default App;
