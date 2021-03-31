import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const Styles = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            done: {
                textDecoration: "none",
            },
            notYet: {
                textDecoration: "line-through",
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            },
        }),
    );
    return useStyles();
}

export default Styles