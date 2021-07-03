import { makeStyles } from '@material-ui/core';
import React from 'react'
import PokerCard from './PokerCard';

const useStyles = makeStyles((theme) => ({
    bottomNav: {
        position: "absolute",
        top: "auto",
        bottom: 0,
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.bottomNav}>
            <PokerCard />
            <PokerCard />
            <PokerCard />
            <PokerCard />
            <PokerCard />
            <PokerCard />
        </div>
    )
}
