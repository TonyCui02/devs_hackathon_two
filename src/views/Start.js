import { makeStyles, AppBar, Grid, Box, Avatar, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import clsx from 'clsx';
import { useHistory } from 'react-router';

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
        fontSize: 240
    },
    clickedIcon: {
        transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        color: "#66bf39	",
    }

}));

export default function Start() {
    const classes = useStyles();
    const [clicked, setClick] = React.useState(false);
    let history = useHistory();

    function handleClick() {
        setClick(true);
        setTimeout(function () {
            history.push("/");
        }, 2000);

    }


    return (
        <div className={classes.root}>
            <Grid className={classes.content} container direction="column" alignItems="center">
                <Grid direction="column" container xs={8} justify="center" alignItems="center">
                    <IconButton aria-label="add to shopping cart" onClick={() => { handleClick() }}>
                        <SupervisedUserCircleIcon className={clsx(classes.icon, clicked && classes.clickedIcon)} />
                    </IconButton>
                </Grid>
                {!clicked ? <Grid container justify="center" xs={4} spacing={8}>
                    <Grid item className={classes.paper}>
                        <Typography variant="caption">
                            Team Size:
                        </Typography>
                        <Typography variant="h2">
                            6
                        </Typography>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <Typography variant="caption">
                            Tasks Remaining:
                        </Typography>
                        <Typography variant="h2">
                            12
                        </Typography>
                    </Grid>
                </Grid>
                    : <Grid container justify="center" xs={4} spacing={8}>
                        <Grid item className={classes.paper}>
                            <Typography variant="h6" className={classes.clickedIcon}>Finding the best fit for your team...</Typography>
                        </Grid>
                    </Grid>}
            </Grid>
        </div>
    )
}
