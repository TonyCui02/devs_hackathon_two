  
import Grid from "@material-ui/core/Grid";
  
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Task from './Task'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));

export default function Tasks({tasks}) {
  const classes = useStyles();

  return (
    <Container>
    <Grid className={classes.root} container justify="center" spacing={3}>
      {tasks.map((task, index) => (
        <Grid item  justify="center" xs={4}>
        <Task key={index} task={task} />
        </Grid>
      ))}
    </Grid>   
    </Container>   
  )
}