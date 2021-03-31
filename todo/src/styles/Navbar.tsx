import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      alignItems: 'center',
      background: '#657185',
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Todo List App
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}