import React, {useEffect, useState} from "react";
import {HSCall2} from "./HSCall2";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Typography, Grid} from "@material-ui/core";
import {SkillCard} from "./SkillCard/SkillCard";
import {CurrentSkill} from "./SkillCard/CurrentSkill";

const useStyles = makeStyles((theme) => ({
    pageHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FFF',
        backgroundColor: theme.palette.primary.main,
        height: '64px',
    },
    appBarSpacer: theme.mixins.toolbar
}));

export const SOTWmain = () => {
    const classes = useStyles();

    const names = ["Praenthos", "PrussianBoy", "Skygorex", "JH3305", "NoLyfeNoob", "OGRapo", "TopKawaii", "Cave Closer", "07 Rogue", "Begiles", "RndomIdiot"];
    const initalXp = [13046825, 334275, 2761016, 13035848, 13157023, 2730830, 2018678, 4868255, 383874, 2079176, 1483293];

    let dataHolder = HSCall2(names, initalXp);

    return (
        <div>
            <AppBar className={classes.pageHeader}>
                <Typography style={{paddingLeft: "10px"}} variant="h5">Bekt CC - Skill of the Week</Typography>
            </AppBar>

            <div className={classes.appBarSpacer}/>

            <CurrentSkill/>

            {dataHolder.sort((a, b) => (b.experience - b.initialXp) - (a.experience - a.initialXp)).map((ele, index) =>
                ele === "Loading" ?
                    <SkillCard loading={true}/>
                    :
                    <SkillCard
                        loading={false}
                        name={ele.name}
                        placement={index+1}
                        level={ele.level}
                        xp={ele.experience}
                        initialXp={ele.initialXp}
                        xpGain={ele.experience - ele.initialXp}/>
            )}

        </div>
    )
};