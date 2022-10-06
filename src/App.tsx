import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Container, Header } from 'semantic-ui-react';

import { RoutesDefinition } from 'App.routes.mapping';

const App: React.FC = () => {
  const routes: Array<any> = Object.keys(RoutesDefinition).map((key) => (
    <Route
      exact
      path={RoutesDefinition[key].path}
      component={RoutesDefinition[key].element}
      key={key}
    />
  ));

  return (
    <Router history={createBrowserHistory()}>
      <Container className="main">
        <Header as="h1" color="red" dividing>
          Digital Expertise Centre Brownbag - State of CSS 2022
        </Header>
        <Switch>{routes}</Switch>
      </Container>
    </Router>
  );
};

export default App;
