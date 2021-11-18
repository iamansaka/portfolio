// Librairie
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './Config/Routes';
import './App.css';

// Composant
import Layout from './Hoc/Layout/Layout.js';
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Laboratoire from './Containers/Laboratoire/Laboratoire';
import Archive from './Containers/Laboratoire/Travaux/Archive';
import PageNotFund from './Containers/PageNotFound/PageNotFound';

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
