import {useQuery} from "react-query";
import {fetchUser} from "./Utils/Queries";

export const HSCall = (name) => {
    const {data, status} = useQuery([ name, "rsApi"], fetchUser, {
        refetchInterval: "300000" //5 mins
    });

    if(status === "success") {
        return(data.stats.hunter);
    }
    else {
        return "Loading"
    }
    //  Handle errors
};