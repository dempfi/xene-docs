import React from 'react'
import { NavLink } from 'react-router-dom'
import docs from './docs'

export const Docs: React.SFC<{}> = (props) => {
  console.log(props.match.params)
  docs(props.match.params).then(console.log)
  return <div><NavLink to='/docs/e' activeClassName="selected">1212</NavLink></div>
}
