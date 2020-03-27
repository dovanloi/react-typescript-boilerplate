import React, { FunctionComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { routes } from '@router';
import DefaultHeader from './DefaultHeader';

const DefaultLayout: FunctionComponent = () => {
  return (
    <React.Fragment>
      <DefaultHeader />
      <Switch>
        {routes.map((route, idx) => {
          return route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          ) : (null);
        })}
        <Redirect from="*" to="404" />
      </Switch>
    </React.Fragment>
  )
}

export default DefaultLayout