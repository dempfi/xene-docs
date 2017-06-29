import React from 'react'
import Article from './article'
import * as T from '../../../../types'

export default (module: T.Module) =>
  <ul key={module.module} className='category'>
    <span className='title'>{module.module}</span>
    {module.articles.map(Article)}
  </ul>
