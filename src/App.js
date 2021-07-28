import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Notes from './components/Notes';
import Create from './components/Create';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import Category from './components/Category'

const theme = createTheme({
  pallete:{
    primary: {
      main: '#fefefe'
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

        </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
