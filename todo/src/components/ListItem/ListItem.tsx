import React from 'react';
import { Grid, Paper, IconButton, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useRemoveTodo from '../../hooks/useRemoveTodo/useRemoveTodo';
import useUpdateTodo from '../../hooks/useUpdateTodo/useUpdateTodo';
import Styles from '../../styles/Styles';

export interface StandardComponentProps {
    title: string,
    id: string,
    completed: boolean
}

export default function ListItem ({title, id, completed}:StandardComponentProps) {
    const classes = Styles();
    let className = classes.done;
    if(completed) {
        className = classes.notYet;
    }

    const UseRemoveHandler = useRemoveTodo();
    const removeHandler = (event: React.MouseEvent) => {
        UseRemoveHandler(id)
    }

    const UseUpdateHandler = useUpdateTodo();
    const updateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        UseUpdateHandler(id);
    }

    return (
        <li key={id} style={ {listStyle: "none", paddingRight: "2rem"} }>
            <Paper style={{padding: "5px", margin: "5px" , backgroundColor: "#657185", color: "white"}}>
                <Grid container justify="center" direction="column" alignItems="center">
                    <span className={className}> 
                    <Checkbox
                        onChange={updateHandler}
                        checked={completed}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    /> 
                        {title}
                        <IconButton onClick={removeHandler} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Grid>
            </Paper>
        </li>
    )
}