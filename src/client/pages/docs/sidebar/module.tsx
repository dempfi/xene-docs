import React from 'react'
import Article from './article'
import * as T from '../../../../types'

export default ({module, articles}: T.Module) =>
  <ul key={module} className='category'>
    <span className='title'>{module}</span>
    {articles.map(Article(module))}
  </ul>
