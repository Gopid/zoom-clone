import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from 'routes';
import Join from 'pages/Join/Join';
import Root from 'pages/Root/Root';
import Meeting from 'pages/Meeting/Meeting';
import theme from 'theme';
import Header from 'components/Header/Header';
import GlobalStyles from 'globalStyles';

const routesWithOutHeader = [routes.MEETING];
const routesWithHeader = Object.values(routes).filter(
  (route) => !routesWithOutHeader.includes(route)
);

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      {routesWithHeader.map((route) => (
        <Route path={route} key={route} exact component={Header} />
      ))}
      <Switch>
        <Route path={routes.JOIN} component={Join} />
        <Route path={routes.MEETING} component={Meeting} />
        <Route path={routes.ROOT} exact component={Root} />
        <Redirect to={routes.ROOT} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
