import React from 'react'
import { API } from '../../../../../types'

const parameter = (param: API.Parameter) =>
  <div>
    <span className='name'>{param.name}</span>:&ensp;
    <span className='type'>{param.type}</span>
    &ensp;—&ensp;
    <span className='docs'>{param.documentation}</span>
  </div>

export default ({ method }: { method: API.Method }) =>
  <div className='parameters'>
    <div className='title'>Parameters</div>
    {method.parameters.map(parameter)}
  </div>
