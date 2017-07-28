import React from 'react'
import { API } from '../../../../../../types'

const parameter = (param: API.Parameter) =>
  <div>
    <span className='name'>{param.name}</span>:&nbsp;
    <span className='type'>{param.type}</span>&nbsp;
    — &nbsp;
    <span className='docs'>{param.documentation}</span>
  </div>

export default ({ method }: { method: API.Method }) =>
  <div className='parameters'>
    <div className='title'>Arguments</div>
    {method.parameters.map(parameter)}
  </div>
