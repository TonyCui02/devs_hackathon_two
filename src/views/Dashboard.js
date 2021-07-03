import { makeStyles, AppBar, Grid, Box } from '@material-ui/core';
import React from 'react'
import { CssBaseline } from '@material-ui/core';
import PokerCard from '../components/PokerCard';
import RatingCard from '../components/RatingCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        display: "Flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 160,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <RatingCard onClick={(event) => handleListItemClick(event, 0)} selected={selectedIndex === 0} value={0} />
                <RatingCard onClick={(event) => handleListItemClick(event, 1)} selected={selectedIndex === 1} value={1} />
                <RatingCard onClick={(event) => handleListItemClick(event, 2)} selected={selectedIndex === 2} value={2} />
                <RatingCard onClick={(event) => handleListItemClick(event, 3)} selected={selectedIndex === 3} value={3} />
                <RatingCard onClick={(event) => handleListItemClick(event, 4)} selected={selectedIndex === 4} value={4} />
                <RatingCard onClick={(event) => handleListItemClick(event, 5)} selected={selectedIndex === 5} value={5} />

            </AppBar>
        </div>
    )
}
