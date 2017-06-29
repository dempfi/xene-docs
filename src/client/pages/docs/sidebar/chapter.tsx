import React from 'react'
import { NavLink } from 'react-router-dom'
import * as T from '../../../../types'

const Chapter = (module: string, article: string) => ({ title, id, chapters }: T.Link) =>
  <li key={id} className='article'>
    <NavLink to={`/docs/${module}/${article}/${id}`}>{title}</NavLink>
    <ul className='chapters'>{chapters.map(Chapter(module, article))}</ul>
  </li>

export default Chapter
