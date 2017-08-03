import React from 'react'
import Markdown from '../markdown'
import { API, Route } from '../../../../../types'
import Signature from './signature'
import Parameters from './parameters'
import Returns from './returns'

const Method = route => (method: API.Method) => {
  const hasParams = Boolean(method.parameters.length)
  const hasReturn = Boolean(method.returnDocumentation)
  const id = (method.name || '').toLowerCase()
  return <div className='declaration' id={id}>
    <Signature method={method} />

    {(hasParams || hasReturn) && <div className='types'>
      {hasParams && <Parameters method={method} />}
      {hasReturn && <Returns method={method} />}
    </div>}

    <Markdown
      source={method.documentation}
      route={route} />
  </div>
}

export default ({ methods, route }: { methods: API.Method[], route: Route }) =>
  <div className='api methods'>
    <h2 id='methods'>Methods</h2>
    {methods.map(Method(route))}
  </div>
