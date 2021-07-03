import { makeStyles, Card, Typography, Link, CardContent, Button, CardActions, CardMedia } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        background: "#383e6e",
        borderRadius: "36px",
        color: "white",
        display: "flex",
    },
    selected: {
        // color: "lightGreen",
        filter: "drop-shadow(4px 4px 8px black)",
        background: theme.palette.secondary.main,
    },
    img: {
        height: 68,
        width: 68,
        borderRadius: 18,
    },
    media: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },
    ratingWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    rating: {
        borderRadius: 16,
        backgroundColor: "#212644",
        height: 68,
        width: 68,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ratingSelected: {
        backgroundColor: theme.palette.secondary.dark
    }
}));

export default function Task(props) {
    const classes = useStyles();
    const { tags, uid, title, rating, id, name, link } = props.message;

    return (
        // <Card className={classes.root} variant="outlined">
        //     <Typography variant="subtitle1" gutterBottom>
        //         {title}
        //     </Typography>
        //     <Typography variant="caption" display="block" >
        //         <Link href={link} style={{ color: "#45a3e5" }}>{'#' + uid}</Link></Typography>
        //     <Typography variant="h3" style={{ color: "#66bf39" }}>
        //         {rating && rating}
        //     </Typography>
        //     <Grid>
        //         {tags.map(data => {
        //             <Typography>{data}</Typography>
        //         })}
        //     </Grid>
        //     <Typography variant={!props.myTask ? "subtitle2" : "h4"} className={clsx(classes.name, props.myTask && classes.myTask)}>
        //         Allocated to: {name}
        //     </Typography>
        // </Card>
        <Card className={clsx(classes.root, props.myTask && classes.selected)}>
            <CardMedia className={classes.media}>
                <img className={classes.img} src="./cardImg.jpg" />
            </CardMedia>
            <CardContent>
                <Typography className={clsx(props.myTask && classes.myTask)} variant="h4" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" component="p">
                    Task: {title}
                </Typography>
                <Typography variant="h6">
                    {/* Tags: {tags.map(data => {
                        <Typography>{data}</Typography>
                    })} */}
                </Typography>
            </CardContent>
            <CardMedia className={classes.ratingWrapper}>
                <div className={clsx(classes.rating, props.myTask && classes.ratingSelected)}>
                    <Typography variant="h4">{rating}</Typography>
                </div>
            </CardMedia>
        </Card >
    );
}