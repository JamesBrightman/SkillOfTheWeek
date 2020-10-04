import React from 'react';
import {Theme} from "./Utils/Theme";
import { ThemeProvider } from '@material-ui/core/styles';
import {SOTWmain} from "./SOTWmain";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <SOTWmain/>
    </ThemeProvider>
  );
}

export default App;
