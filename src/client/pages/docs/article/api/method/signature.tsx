import React from 'react'
import { API } from '../../../../../../types'

const join = (params: API.Parameter[]) =>
  params.reduce((acc, param, index) => {
    if (index !== 0) acc.push(', ')
    return acc.concat(<span className='parameter'>{param.name}</span>)
  }, [])

export default ({ method }: { method: API.Method }) =>
  <div className='signature'>
    <span className='name'>{method.name || 'constructor'}</span>
    ({join(method.parameters)})&nbsp;
    <span className='arrow'>=></span>&nbsp;
    <span className='type'>{method.type || 'instance'}</span>
  </div>
