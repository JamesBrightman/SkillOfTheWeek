import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export const SkeletonWrapper = (props) => {
    return (
        <>
            {props.loading ?
                <Skeleton width={"100%"}>{props.children}</Skeleton>
                :
                <>{props.children}</>
            }
        </>
    )
};