import React from 'react'
import upperCase from 'lodash-es/upperCase'
import Article from './article'
import * as T from '../../../../types'

export default (route: T.Route) => ({module, articles}: T.Module) =>
  <ul key={module} className='module'>
    <span className='title'>{upperCase(module)}</span>
    {articles.map(Article(route, module))}
  </ul>
