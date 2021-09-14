import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Recent from './components/page/Recent';
import Create from './components/Create';
import Layout from './components/Layout';
import {createTheme, ThemeProvider} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cd8500'
    },
    secondary: {
      main: '#0540F2' 
    },
    typography: {
      fontFamily: "Ubuntu",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700, 
    }
  }
})

function App() {
  return (
    
    <ThemeProvider theme={theme}> 
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/recent">
              <Recent />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>         
          </Switch>
          
          </Layout>
      </Router>
     
    </ThemeProvider>
    
  );
}

export default App;
