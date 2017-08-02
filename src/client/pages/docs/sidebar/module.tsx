import React from 'react'
import Article from './article'
import { Route, Link } from '../../../../types'

export default (route: Route) => (link: Link) =>
  <ul key={link.id} className='module'>
    <span className='title'>
      <span className={`icon ${link.id}`} />
      {link.title}
    </span>
    {link.chapters.map(Article(route, link.id))}
  </ul>
