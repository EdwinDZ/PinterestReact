import React from 'react'
import HomeTuilleScreen from '../screens/homeTuilleScreen'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './pirvateRoute'
import TuilleScreen from '../screens/homeTuilleScreen'
import Header from '../components/header/NavBarTopHome';
import Footer from '../components/header/NavBarBotHome';

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomeTuilleScreen}></Route>
      <PrivateRoute
          exact
          path='/images'
          component={TuilleScreen}
        ></PrivateRoute>
      </Switch>
      <Footer/>
    </Router>
    
  )
}

export default AppRouter
