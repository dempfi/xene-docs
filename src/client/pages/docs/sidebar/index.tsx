import React from 'react'
import Module from './module'
import Logo from '../../../components/logo'
import { Documentation, Route } from '../../../../types'

type Props = { index: Documentation, route: Route }

export default ({index, route}: Props) =>
  <div className='sidebar'>
    <Logo size={56} />
    <nav>{index.map(Module(route))}</nav>
  </div>
