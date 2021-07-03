import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
        width: 45,
        height: "auto",
        borderRadius: 26,
        // background: theme.alette.common.white,
        [theme.breakpoints.up('sm')]: {
            width: 90,
        },
    },
    selected: {
        color: "white",
    }
}));



export default function PokerCard(props) {
    const classes = useStyles(props);

    return (
        <Button color={props.selected ? "secondary" : "default"} onClick={props.onClick} className={clsx(classes.root, props.selected && classes.selected)}
            variant="contained" >{<Typography variant="h3">
                {props.value}</Typography>}</Button>
    )
}
