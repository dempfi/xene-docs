import React from 'react'
import { NavLink } from 'react-router-dom'
import witLoader from '../../utils/with-loader'
import docs from './docs'

const Docs: React.SFC<any> = (props: { docs }) => {
  return <div>
    <NavLink to='/docs/core/dialog' activeClassName="selected">Dialog</NavLink>
    <NavLink to='/docs/core/bot' activeClassName="selected">Bot</NavLink>
    <NavLink to='/docs/core/command' activeClassName="selected">command</NavLink>
  </div>
}

const loader = a => docs(a.match.params)
export default witLoader('docs', loader, Docs)
