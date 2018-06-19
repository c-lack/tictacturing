import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Template from './containers/Template'
import TicTacToe from './containers/TicTacToe'

Meteor.startup(() => {
  render((
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Template><TicTacToe /></Template>} />
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))
})
