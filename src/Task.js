import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 150,
    marginLeft: 45,
  },
});

export default function Task({ task }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{ borderColor: "#45a3e5", borderRadius: "15px", borderWidth: "2px"}}>
      <Typography variant="subtitle1" gutterBottom>
      {task.title}
      </Typography>
      <Typography variant="caption" display="block" >
      <Link href={task.link} style={{color: "#45a3e5"}}>{'#' + task.id}</Link></Typography>     
      <Typography variant="h3" style={{ color: "#66bf39" }}>
      {task.score}
      </Typography>  
      <Typography variant="subtitle1" gutterBottom>
      {task.developer}
      </Typography>
    </Card>
  );
}