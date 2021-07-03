import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Task from './Task'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
}));

export default function Tasks(props) {
    const firestore = props.firestore
    const classes = useStyles();
    const tasksRef = firestore.collection('tasks');
    const query = tasksRef.limit(100);

    // const [tasks] = useCollectionData(query, { idField: 'id' });


    return (
        <Container>
            {/* <Grid className={classes.root} container justify="center" spacing={3}>
                {tasks && tasks.map(msg =>
                    <Grid item key={msg.id}>
                        <Typography>
                            Test
                        </Typography>
                    </Grid>)}
            </Grid> */}
        </Container>
    )
}