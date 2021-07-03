import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Task from './Task'
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();
const query = db.collection('tasks').limit(100);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
}));

export default function Tasks() {
    const classes = useStyles();
    const [tasks, setTasks] = React.useState([]);
    const taskRef = firestore.collection('tasks');

    React.useEffect(() => {
        if (db) {

        }
    }, [input])

    return (
        <Container>
            <Grid className={classes.root} container justify="center" spacing={3}>
            </Grid>
        </Container>
    )
}