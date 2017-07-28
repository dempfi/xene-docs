import React from 'react'
import { API } from '../../../../../../types'

export default ({ method }: { method: API.Method }) =>
  <div className='returns'>
    <div className='title'>Returns</div>
    <span className='type'>{method.type}</span>&nbsp;
    <span className='docs'>— {method.returnDocumentation}</span>
  </div>
