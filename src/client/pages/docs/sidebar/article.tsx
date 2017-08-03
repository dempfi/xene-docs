import React from 'react'
import { NavLink } from 'react-router-dom'
import Chapter from './chapter'
import hasActive from './has-active'
import { Route, Link } from '../../../../types'

export default (route: Route, module: string) =>
  ({ title, id, chapters, type }: Link) =>
    <li key={id} className={`article ${type} ${hasActive(route, { module, article: id, chapters }) && 'has-active'}`}>
      <NavLink to={`/docs/${module}/${id}`} exact>{type ? `${type} ${title}` : title}</NavLink>
      {hasActive(route, { module, article: id, chapters }) && <ul className='chapters'>
        {chapters.map(Chapter(route, module, id))}
      </ul>}
    </li>
