import { makeStyles, AppBar, Grid, Box, Typography, Toolbar, TextField, Button } from '@material-ui/core';
import React from 'react'
import RatingCard from '../components/RatingCard';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Task from "../components/Task"
import { useCollectionData, useDocument } from 'react-firebase-hooks/firestore';
import {useHistory} from 'react-router-dom';


firebase.initializeApp({
    apiKey: "AIzaSyB1EkBznswgGfQQgeZAjo31-tXVhiTUZEg",
    authDomain: "taskr-a222d.firebaseapp.com",
    projectId: "taskr-a222d",
    storageBucket: "taskr-a222d.appspot.com",
    messagingSenderId: "965424484266",
    appId: "1:965424484266:web:211500737137441f1a65d3"
})

const firestore = firebase.firestore();


const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: "100vh",
        maxWidth: "100vw",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
    },
    appBar: {
        position: "fixed",
        top: 'auto',
        bottom: 0,
        display: "Flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        height: 160,
    },
    appBarTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 64,
    },
    nameInput: {
        margin: 2,
    },
    tasks: {
        marginTop: 80,
        margin: 56,
    },
    managerBar: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        textAlign: "center",
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const indexRef = firestore.collection('iteration')
    const [index] = useCollectionData(indexRef.limit(25))
    const [selectedIndex, setSelectedIndex] = React.useState("");
    const [name, setName] = React.useState("");
    let history = useHistory();

    const taskRef = !props.new ? firestore.collection('tasks') : firestore.collection('tasks2');
    const query = taskRef.limit(25);
    let sum = 0;


    const [tasks] = useCollectionData(query, { idField: 'id' });

    const handleChange = (event) => {
        setName(event.target.value);
        // console.log(name)
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        name && taskRef.doc(name).update({
            // uid: Math.floor(Math.random() * (9999 - 1111 + 1) + 1111),
            rating: index
        })
        // firestore.collection("tasks").doc("Bob").set({
        //     name: "Bob",
        //     tags: ["Firestore", "Google Analytics", "JavaScript", "Python"],
        //     title: "Finalise metrics algorithm in A/B website testing",
        // })
    };

    function Reassign() {
        history.push("/loadingAdmin");
    }

    return (
        <Grid container component="main" className={classes.root}>
            <AppBar>
                {/* <Typography variant="h6">{name}</Typography> */}
                <Toolbar style={{ justifyContent: "center" }}>
                    <TextField
                        id="filled-name"
                        label="Name"
                        value={name}
                        onChange={handleChange}
                        variant="outlined"
                        className={classes.nameInput}
                        size="small"
                        color="secondary"
                    />
                </Toolbar>
            </AppBar>
            <Grid item xs={12} className={classes.tasks}>
                <Typography variant="h3" gutterBottom>Results</Typography>
                <Grid container spacing={5} style={{
                    display: 'flex',
                    overflow: 'auto',
                }}>
                    {tasks && tasks.map(msg =>
                        <Grid key={msg.id} item xs={12} md={4} lg={4} >
                            <Task myTask={msg.name === name} message={msg}>
                            </Task>
                        </Grid>)}
                </Grid>
            </Grid>
            {!props.admin ? <AppBar position="fixed" color="primary" className={classes.appBar}>
                <RatingCard onClick={(event) => handleListItemClick(event, 0)} selected={selectedIndex === 0} value={0} />
                <RatingCard onClick={(event) => handleListItemClick(event, 1)} selected={selectedIndex === 1} value={1} />
                <RatingCard onClick={(event) => handleListItemClick(event, 2)} selected={selectedIndex === 2} value={2} />
                <RatingCard onClick={(event) => handleListItemClick(event, 3)} selected={selectedIndex === 3} value={3} />
                <RatingCard onClick={(event) => handleListItemClick(event, 4)} selected={selectedIndex === 4} value={4} />
                <RatingCard onClick={(event) => handleListItemClick(event, 5)} selected={selectedIndex === 5} value={5} />
            </AppBar> : <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={classes.managerBar}>
                    <Button variant="outlined" size="large" onClick={() => Reassign()}>Reassign</Button>
                    <div>
                        <Typography variant="h6">Average task satisfaction: </Typography>
                        {tasks && <AverageRating data={tasks} />}
                    </div>
                    <Button href="https://devs-2021-the-rookies.atlassian.net/jira/software/projects/TRS2021/boards/1" variant="outlined" size="large">Continue</Button>
                </Toolbar>
            </AppBar>}
        </Grid>
    )
}

function AverageRating(props) {
    const data = props.data;
    let sum = 0;

    data.forEach((obj) => {
        // console.log(obj.rating)
        sum = sum + obj.rating
    }
    );

    return (
        <Typography variant="h2">{Math.round((sum / 6) * 100) / 100}</Typography>
    )
}