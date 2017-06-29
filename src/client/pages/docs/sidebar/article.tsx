import React from 'react'
import * as T from '../../../../types'

export default (article: T.Article) =>
  <li key={article.id} className='article'>
    {article.title}
  </li>
