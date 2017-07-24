import React from 'react'
import { API } from '../../../../../types'

export default (node: API.Property) =>
  <div className='declaration'>
    <div className='signature'>
      <span className='name'>{node.name}</span>:&nbsp;
      <span className='type'>{node.type}</span>
    </div>
  </div>
