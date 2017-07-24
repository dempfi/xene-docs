import React from 'react'
import { API } from '../../../../../types'

const parameter = (param: API.Parameter) =>
  <div>
    <span className='name'>{param.name}</span>&nbsp;
    <span className='type'>{param.type}</span>&nbsp;
    — &nbsp;
    <span className='docs'>{param.documentation}</span>
  </div>

const parameters = (params: API.Parameter[]) =>
  params.reduce<React.ReactType[]>((acc, param, index) => {
    if (index !== 0) acc.push(', ')
    return acc.concat(<span className='parameter'>{param.name}</span>)
  }, [])

export default (method: API.Method) =>
  <div className='declaration'>
    <div className='signature'>
      <span className='name'>{method.name || 'constructor'}</span>
      ({parameters(method.parameters)})&nbsp;
      <span className='arrow'>-></span>&nbsp;
      <span className='type'>{method.type || 'instance'}</span>
    </div>
    <div className='parameters'>
      <div className='title'>Arguments</div>
      {method.parameters.map(parameter)}
    </div>
    <div className='returns'>
      <div className='title'>Returns</div>
      <div className='type'>{method.type}</div>
    </div>
  </div>
