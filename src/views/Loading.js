import { makeStyles, AppBar, Grid, Box, Avatar, IconButton, Typography, CircularProgress } from '@material-ui/core';
import React from 'react'
import clsx from 'clsx';
import { useHistory } from 'react-router';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#282c34',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        color: "#eb670f",
        fontSize: 240,
        buttonRipple: "red"
    },
    clickedIcon: {
        transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        color: "#66bf39	",
    }

}));

export default function Loading(props) {
    const classes = useStyles();
    const [clicked, setClick] = React.useState(false);
    let history = useHistory();

    React.useEffect(() => {
        setTimeout(function () {
            props.admin ? history.push("/admin1") : history.push("/1");
        }, 2500);
    }, [])


    return (
        <div className={classes.root}>
            <Grid className={classes.content} container direction="column" alignItems="center">
                <Grid item direction="column" container xs={8} justify="center" alignItems="center">
                    <IconButton aria-label="add to shopping cart">
                        <CircularProgress size="18rem" className={clsx(classes.icon, clicked && classes.clickedIcon)} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography variant="h5" gutterBottom>Loading...</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
