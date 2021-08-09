import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Notes from './components/Notes';
import Create from './components/Create';
import Layout from './components/Layout';
import Edit from './components/Edit';
import {createTheme, ThemeProvider} from '@material-ui/core';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: '#009acd'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/recent">
            <Notes />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
          
        </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
