import React from 'react'
import { NavLink } from 'react-router-dom'
import hasActive from './has-active'
import { Route, Link } from '../../../../types'

const isMethod = (str: string) => /\(\)/.test(str)

export default function Chapter(route: Route, module: string, article: string) {
  return ({ title, id, chapters }: Link) =>
    <li key={id} className={`chapter ${isMethod(title) && 'is-method'} ${hasActive(route, { module, article, chapter: id, chapters }) && 'has-active'}`}>
      <NavLink to={`/docs/${module}/${article}/${id}`}>{title}</NavLink>
      <ul className='chapters'>{chapters.map(Chapter(route, module, article))}</ul>
    </li>
}
