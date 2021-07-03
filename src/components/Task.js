import { makeStyles, Card, Typography, Link, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 200,
        marginLeft: 45,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
    },
});

export default function Task(props) {
    const classes = useStyles();
    const { tags, uid, title, rating, id, name } = props.message;

    return (
        <Card className={classes.root} variant="outlined" style={{ borderColor: "#45a3e5", borderRadius: "15px", borderWidth: "2px" }}>
            <Typography variant="subtitle1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="caption" display="block" >
                <Link href={title} style={{ color: "#45a3e5" }}>{'#' + uid}</Link></Typography>
            <Typography variant="h3" style={{ color: "#66bf39" }}>
                {rating && rating}
            </Typography>
            <Grid>
                {tags && tags.map(data => {
                    <Typography>{data}</Typography>
                })}
            </Grid>
            <Typography variant="subtitle2">
                Allocated to: {name}
            </Typography>
        </Card>
    );
}