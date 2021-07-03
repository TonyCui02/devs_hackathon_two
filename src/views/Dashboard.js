import { makeStyles, AppBar, Grid, Box, Typography, Toolbar, TextField, Button } from '@material-ui/core';
import React from 'react'
import RatingCard from '../components/RatingCard';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Task from "../components/Task"
import { useCollectionData } from 'react-firebase-hooks/firestore';


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
    // const taskRef = firestore.collection('developers');
    const [selectedIndex, setSelectedIndex] = React.useState("");
    const [name, setName] = React.useState("");

    const taskRef = firestore.collection('tasks');
    const query = taskRef.limit(25);
    let sum = 0;


    const [tasks] = useCollectionData(query, { idField: 'id' });

    console.log(sum)

    const handleChange = (event) => {
        setName(event.target.value);
        // console.log(name)
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        name && firestore.collection("tasks").doc(name).update({
            // uid: Math.floor(Math.random() * (9999 - 1111 + 1) + 1111),
            rating: index
        })
        // firestore.collection("tasks").doc("Bob").set({
        //     name: "Bob",
        //     tags: ["Firestore", "Google Analytics", "JavaScript", "Python"],
        //     title: "Finalise metrics algorithm in A/B website testing",
        // })
    };

    return (
        <Grid container component="main" className={classes.root}>
            <AppBar>
                <div className={classes.appBarTop}>
                    {/* <Typography variant="h6">{name}</Typography> */}
                    <TextField
                        id="filled-name"
                        label="Name"
                        value={name}
                        onChange={handleChange}
                        variant="outlined"
                        className={classes.nameInput}
                        size="small"
                    />
                </div>
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
                    <Button variant="outlined" size="large">Reassign</Button>
                    <div>
                        <Typography variant="h6">Average task satisfaction: </Typography>
                        {tasks && <AverageRating data={tasks} />}
                    </div>
                    <Button variant="outlined" size="large">Continue</Button>
                </Toolbar>
            </AppBar>}
        </Grid>
    )
}

function AverageRating(props) {
    const data = props.data;
    let sum = 0;

    data.forEach((obj) => {
        console.log(obj.rating)
        sum = sum + obj.rating
    }
    );

    return (
        <Typography variant="h2">{Math.round((sum / 6) * 100) / 100}</Typography>
    )
}