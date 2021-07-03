import React from 'react'
import { Card, CardActionArea, CardContent, Typography, CardMedia, CardActions, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        margin: 10,
        width: 120,
    },
    media: {
        height: 120,
        width: "auto",
    },
});

const values = {
    0: "0.png",
    1: "1.png",
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
}

export default function PokerCard(props) {
    const classes = useStyles();

    return (
        <Card raised className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <CardMedia
                        className={classes.media}
                        image={values[props.value]}
                        title="Contemplative Reptile"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
