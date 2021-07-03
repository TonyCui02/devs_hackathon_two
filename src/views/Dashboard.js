import { makeStyles, AppBar, Grid, Box } from '@material-ui/core';
import React from 'react'
import { CssBaseline } from '@material-ui/core';
import PokerCard from '../components/PokerCard';
import RatingCard from '../components/RatingCard';
import Tasks from '../components/Tasks';
import 'firebase/auth';
import 'firebase/firestore';

const auth = firebase.auth();

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
    content: {
        marginBottom: 160,
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <Grid container className={classes.content}>
                <Tasks tasks={tasks} />
            </Grid>
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

const tasks = [
    {
        id: 3928,
        title: "Implement Registration API",
        developer: "John Doe",
        score: 4,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 1514,
        title: "Resolve Reload Bug",
        developer: "Jane Doe",
        score: 1,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 7812,
        title: "Usability Feedback Report",
        developer: "Destiny Li",
        score: 5,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 3928,
        title: "Implement Registration API",
        developer: "John Doe",
        score: 4,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 1514,
        title: "Resolve Reload Bug",
        developer: "Jane Doe",
        score: 1,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 7812,
        title: "Usability Feedback Report",
        developer: "Destiny Li",
        score: 5,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 3928,
        title: "Implement Registration API",
        developer: "John Doe",
        score: 4,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 1514,
        title: "Resolve Reload Bug",
        developer: "Jane Doe",
        score: 1,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 7812,
        title: "Usability Feedback Report",
        developer: "Destiny Li",
        score: 5,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 3928,
        title: "Implement Registration API",
        developer: "John Doe",
        score: 4,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 1514,
        title: "Resolve Reload Bug",
        developer: "Jane Doe",
        score: 1,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    },
    {
        id: 7812,
        title: "Usability Feedback Report",
        developer: "Destiny Li",
        score: 5,
        link: "https://wdcc-aspa.atlassian.net/browse/ASPA-34",
    }

]