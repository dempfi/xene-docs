import 'whatwg-fetch'
import * as React from 'react'
import * as DOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Main } from './pages/main'
import Docs from './pages/docs'

const Router = BrowserRouter

const App = () =>
  <Router>
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/docs/:module/:article/:chapter?' component={Docs} />
    </div>
  </Router>

DOM.render(React.createElement(App), document.querySelector('#root'))
