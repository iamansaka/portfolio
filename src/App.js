// Librairie
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './Config/Routes';
import './App.css';

// Composant
import Layout from './Hoc/Layout/Layout.js';
import Home from './Containers/Home/Home';
import PageNotFund from './Containers/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path={ routes.HOME } component={ Home } />
          <Route exact path={ routes.LABORATOIRE } render={() => <h1>Laboratoire</h1>} />
          <Route exact path={ routes.ABOUT } render={() => <h1>A propos</h1>} />
          <Route component={ PageNotFund } />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
