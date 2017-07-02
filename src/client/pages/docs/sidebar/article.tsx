import React from 'react'
import { NavLink } from 'react-router-dom'
import Chapter from './chapter'
import hasActive from './has-active'
import * as T from '../../../../types'

export default (route: T.Route, module: string) =>
  ({ title, id, chapters, category }: T.Article) =>
    <li key={id} className={`article ${category} ${hasActive(route, { module, article: id, chapters }) && 'has-active'}`}>
      <NavLink to={`/docs/${module}/${id}`} exact>{title}</NavLink>
      {hasActive(route, { module, article: id, chapters }) && <ul className='chapters'>
        {chapters.map(Chapter(route, module, id))}
      </ul>}
    </li>
