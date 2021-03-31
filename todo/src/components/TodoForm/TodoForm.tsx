import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core';
import useAddTodo from '../../hooks/useAddTodo/useAddTodo';
import Styles from '../../styles/Styles';

const TodoForm: React.FC = () => {
  const classes = Styles();
  const [title, setTitle] = useState<string>('')
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const UseAddHandler = useAddTodo();
  const addHandler = (event: React.MouseEvent) => {
      UseAddHandler(title);
      setTitle('');
  }

  return (
      <div className={classes.root}>
            <Input
              onChange={changeHandler}
              value={title} 
              placeholder="Type smth.." 
              inputProps={{ 'aria-label': 'description' }}
              style={{ margin: 80 }}
              fullWidth
            />
            <Button onClick={addHandler} variant="contained">Submit</Button>
      </div>
  )
}

export default TodoForm;