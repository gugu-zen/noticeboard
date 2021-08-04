import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Notes from './components/Notes';
import Create from './components/Create';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import Category from './components/Category'
import Edit from './components/Edit'

const theme = createTheme({
  pallete:{
    primary: {
      main: '#2196f3'
    },
    secondary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route exact path="/create">
           <Create />
         </Route>
         <Route exact path="/category">
           <Category />
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
