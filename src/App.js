import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApiCall from './components/ApiCall';
import CatViews from './container/CatViews';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ApiCall} exact />
      <Route path="/image/:id" component={CatViews} />
    </Switch>
  </BrowserRouter>
);

export default App;
