import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Notes from './components/Notes';
import Create from './components/Create';
import Layout from './components/Layout';
import Edit from './components/Edit'


function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
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
  );
}

export default App;
