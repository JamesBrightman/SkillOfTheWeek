import React, {useEffect, useState} from "react";
import {Card, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexDirection: 'column'
    },
    card: {
        width: "100%",
        margin: "1rem"
    },
    cardText: {
        textAlign: "center"
    },
    cardHeader: {
        textAlign: "center",
        padding: "0.5rem"
    }
});

export const CurrentSkill = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography className={classes.cardHeader} variant="h6">Skill of the Week</Typography>
                <Typography className={classes.cardText} variant="h4"><b>Hunter</b></Typography>
            </Card>
        </div>
    )
};