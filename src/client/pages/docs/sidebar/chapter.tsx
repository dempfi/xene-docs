import React from 'react'
import { NavLink } from 'react-router-dom'
import hasActive from './has-active'
import * as T from '../../../../types'

export default function Chapter(route: T.Route, module: string, article: string) {
  return ({ title, id, chapters }: T.Link) =>
    <li key={id} className={`chapter ${hasActive(route, { module, article, chapter: id, chapters }) && 'has-active'}`}>
      <NavLink to={`/docs/${module}/${article}/${id}`}>{title}</NavLink>
      <ul className='chapters'>{chapters.map(Chapter(route, module, article))}</ul>
    </li>
}
