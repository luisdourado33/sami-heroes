import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'src/pages/Home';

type PrivateRouteProps<T> = T & { component: React.ReactNode };

const Router = ({ component: Component, ...rest }: PrivateRouteProps<any>) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Router path='/' component={Home} exact />
    </BrowserRouter>
  );
};

export default Routes;
