// import libs
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// import components
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import Layout from '../layout'
import EveryScrollTop from '../common/scroll-top/EveryScrollTop'

const Routes = () => (
  <Router>
    <Layout>
      <EveryScrollTop />
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />
          }
          return <PublicRoute key={i} {...route} />
        })}
      </Switch>
    </Layout>
  </Router>
)

export default Routes
