import * as React from 'react'
import Module from './module'
import { Link } from 'react-router-dom'
import Logo from '../../../components/logo'
import { Documentation, Route } from '../../../../types'

type Props = { index: Documentation, route: Route }

export default ({ index, route }: Props) =>
  <div className='sidebar'>
    <Link to='/'><Logo size={56} /></Link>
    <nav>{index.map(Module(route))}</nav>
  </div>
