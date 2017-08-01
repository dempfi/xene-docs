import React from 'react'
import { API } from '../../../../../../types'

const parameter = (param: API.Parameter) =>
  <span className='parameter'>
    {param.isDotDotDot && <span className='is-dotdotdot'>...</span>}
    <span>{param.name}</span>
    {param.optional && <span className='is-optional'>?</span>}
  </span>

const join = (params: API.Parameter[]) =>
  params.reduce((acc, param, index) => {
    if (index !== 0) acc.push(', ')
    return acc.concat(parameter(param))
  }, [])

export default ({ method }: { method: API.Method }) =>
  <div className='signature'>
    {method.isStatic && <span className='is-static'>static</span>}
    <span className='name'>{method.name || 'constructor'}</span>
    ({join(method.parameters)})&nbsp;
    <span className='arrow'>=></span>&nbsp;
    <span className='type'>{method.type || 'instance'}</span>
  </div>
