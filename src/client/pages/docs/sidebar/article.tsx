import React from 'react'
import { NavLink } from 'react-router-dom'
import Chapter from './chapter'
import * as T from '../../../../types'

export default (module: string) => ({title, id, chapters}: T.Article) =>
  <li key={id} className='article'>
    <NavLink to={`/docs/${module}/${id}`}>{title}</NavLink>
    <ul className='chapters'>{chapters.map(Chapter(module, id))}</ul>
  </li>
