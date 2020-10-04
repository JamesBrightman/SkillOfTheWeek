import React from "react";
import {HSCall} from "./HSCall";

export const HSCall2 = (names, initalXp) => {

    let dataHolder = [];
    names.map((ele, index) => {
        let data = HSCall(ele);
        if(data !== "Loading") {
            data.name = ele;
            data.initialXp = initalXp[index]
        }
        dataHolder.push(data);
    });

    return (dataHolder)
};