import React from 'react'
import HomeTuilleScreen from '../screens/homeTuilleScreen'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Header from '../components/header/NavBarTopHome';
import Footer from '../components/header/NavBarBotHome';

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomeTuilleScreen}></Route>
      </Switch>
      <Footer/>
    </Router>
    
  )
}

export default AppRouter
