import React from 'react'
import Module from './module'
import { Index, Route } from '../../../../types'

type Props = { index: Index, route: Route }

export default ({ index, route }: Props) =>
  <nav className='sidebar'>{index.map(Module(route))}</nav>
