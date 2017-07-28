import React from 'react'
import Method from './method'
import Property from './property'
import { API, Route } from '../../../../../types'

const syntaxNode = (route: Route) => (node: API.Member) => {
  switch (node.kind) {
    case 141: return Property(node)
    case 143: return Method({ route, method: node })
  }
}

export default ({ api, route }: { api: API.ClassDeclaration, route: Route }) =>
  <div className='api'>
    <h2>API</h2>
    {api.members.map(syntaxNode(route))}
  </div>
