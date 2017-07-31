import React from 'react'
import Markdown from '../../markdown'
import { API, Route } from '../../../../../../types'
import Signature from './signature'
import Parameters from './parameters'
import Returns from './returns'

type Props = { method: API.Method, route: Route }

export default (props: Props) => {
  const hasParams = Boolean(props.method.parameters.length)
  const hasReturn = Boolean(props.method.returnDocumentation)
  return <div className='declaration'>
    <Signature {...props} />

    {(hasParams || hasReturn) && <div className='types'>
      {hasParams && <Parameters {...props} />}
      {hasReturn && <Returns {...props} />}
    </div>}

    <Markdown
      source={props.method.documentation}
      route={props.route} />
  </div>
}
