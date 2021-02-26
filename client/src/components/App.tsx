import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from '../routes';
import Join from './pages/Join/Join';
import Main from './pages/Main/Main';
import Meeting from './pages/Meeting/Meeting';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.JOIN}>
          <Join />
        </Route>
        <Route path={routes.MEETING}>
          <Meeting />
        </Route>
        <Route path={routes.MAIN}>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
