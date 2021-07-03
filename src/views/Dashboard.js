import { makeStyles, AppBar, Grid, Box, Typography, Toolbar, TextField } from '@material-ui/core';
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
    appBarTop: {
        display: "flex",
        justifyContent: "center",
    },
    content: {
        marginBottom: 160,
    },
    nameInput: {
        margin: 2,
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const taskRef = firestore.collection('developers');
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name)
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        firestore.collection("tasks").doc(name).update({
            uid: Math.floor(Math.random() * (9999 - 1111 + 1) + 1111),
            rating: index
        })
        // firestore.collection("tasks").doc("Bob").set({
        //     name: "Bob",
        //     tags: ["Firestore", "Google Analytics", "JavaScript", "Python"],
        //     title: "Finalise metrics algorithm in A/B website testing",
        // })
    };

    return (
        <div className={classes.root}>
            <AppBar color="white">
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
            <Grid container className={classes.content}>
                <TaskData name={name} />
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

function TaskData(props) {
    const taskRef = firestore.collection('tasks');
    const query = taskRef.limit(25);

    const [tasks] = useCollectionData(query, { idField: 'id' });

    return (
        <Grid container style={{ marginTop: 100 }}>
            {tasks && tasks.map(msg => <Task key={msg.id} message={msg}></Task>)}
        </Grid>
    )
}