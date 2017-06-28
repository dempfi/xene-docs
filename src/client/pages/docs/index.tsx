import React from 'react'
import { NavLink } from 'react-router-dom'

export const Docs: React.SFC<{}> = (props) => {
  console.log(props)
  return <div><NavLink to='/docs/e' activeClassName="selected">1212</NavLink></div>
}
