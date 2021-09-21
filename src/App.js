import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home'
import Recent from './components/Recent';
import Explore from './components/Explore';
import Trending from './components/Trending';
import Create from './components/Create';
import Bookmark from './components/Bookmark';
import Help from './components/Help';
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

function Page() {
  return (
    
    <ThemeProvider theme={theme}>
        <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/trending">
              <Trending />
            </Route> 
            <Route exact path="/recent">
              <Recent />
            </Route>  
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/bookmark">
              <Bookmark />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>         
          </Switch>
          </Layout>
      </Router>
    </ThemeProvider>
    
  );
}

export default Page;
