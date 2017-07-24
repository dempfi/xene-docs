import React from 'react'
import Method from './method'
import Property from './property'
import { API } from '../../../../../types'

const syntaxNode = (node: API.Member) => {
  switch (node.kind) {
    case 141: return Property(node)
    case 143: return Method(node)
  }
}

export default ({ api }: { api: API.ClassDeclaration }) =>
  <div className='api'>
    <h2>API</h2>
    {api.members.map(syntaxNode)}
  </div>
