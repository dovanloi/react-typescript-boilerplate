import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from '@pages/Page404'
import Page500 from '@pages/Page500'
import DefaultLayout from '@containers/DefaultLayout'
import { useGetmeQuery } from './graphql-api'

const App: FunctionComponent = () => {
  const blogs = useGetmeQuery()
  console.log(blogs)
  return (
    <Router>
      <Switch>
        <Route path="/500" exact={true} name='500' component={Page500} />
        <Route path="/404" exact={true} name='/404' component={Page404} />
        <Route path="/" name='home' component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;