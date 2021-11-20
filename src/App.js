// Librairie
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './Config/Routes';
import './App.css';

// Composants
import Layout from './Hoc/Layout/Layout.js';
import { Home, About, Laboratoire, Archive, PageNotFund } from './Containers/index';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path={ routes.HOME } component={ Home } />
          <Route exact path={ routes.LABORATOIRE } component={ Laboratoire } />
          <Route exact path={ routes.LABORATOIRE + '/:id' } component={ Archive } />
          <Route exact path={ routes.ABOUT } component={ About } />
          <Route component={ PageNotFund } />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
