import React, {useEffect, useState} from "react";
import {Card, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {SkeletonWrapper} from "../Utils/SkeletonWrapper";

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
        width: "85%",
        margin: "1rem"
    },
    cardText: {
        textAlign: "center"
    },
    cardHeader: {
        textAlign: "center",
        padding: "0.5rem"
    },
    cardPlacement: {
        position: "absolute",
        paddingLeft: "1rem",
        paddingTop: "1rem",

    }
});

export const SkillCard = (props) => {
    const classes = useStyles();

    let xpGain = props.xpGain ? props.xpGain.toLocaleString() : props.xpGain;
    let xpCurrent = props.xp ? props.xp.toLocaleString() : props.xp;
    let xpInitial = props.initialXp ? props.initialXp.toLocaleString() : props.initialXp;
    let cardBackingColor;

    switch (props.placement) {
        case 1:
            cardBackingColor = "rgba(255,222,0,0.35)";
            break;
        case 2:
            cardBackingColor = "rgba(109,109,109,0.35)";
            break;
        case 3:
            cardBackingColor = "rgba(97,49,14,0.35)";
            break;
        default:
            cardBackingColor = "#fff";
            break;
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card} style={{backgroundColor: cardBackingColor}}>
                <SkeletonWrapper loading={props.loading}>
                    <Typography className={classes.cardPlacement} variant="h6"><b>#{props.placement}</b></Typography>
                    <Typography className={classes.cardHeader} variant="h4"><b>{props.name}</b></Typography>
                    <Typography className={classes.cardText} variant="h6">Level: {props.level}</Typography>
                    <Typography className={classes.cardText} variant="h6">XP Gained: {xpGain}</Typography>
                    <Typography className={classes.cardText} variant="h6">Current XP: {xpCurrent}</Typography>
                    <Typography className={classes.cardText} variant="h6">Initial XP: {xpInitial}</Typography>
                </SkeletonWrapper>
            </Card>
        </div>
    )
};