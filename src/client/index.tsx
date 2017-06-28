import React from 'react'
import DOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Main } from './pages/main/index.js'
import { Docs } from './pages/docs/index.js'

const Router: any = BrowserRouter

const App: React.SFC<{}> = () =>
  <Router>
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/docs/:module/:article/:chapter' component={Docs} />
    </div>
  </Router>

DOM.render(React.createElement(App), document.querySelector('#root'))
