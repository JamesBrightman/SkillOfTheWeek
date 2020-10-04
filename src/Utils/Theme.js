import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from "@material-ui/core/colors/grey";

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    },
});