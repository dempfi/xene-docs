import React from 'react'
import Module from './module'
import Searchbar from './searchbar'
import { Link } from 'react-router-dom'
import Logo from '../../../components/text-logo'
import { Index, Route } from '../../../../types'

type Props = { index: Index, route: Route }

export default ({ index, route }: Props) =>
  <div className='sidebar'>
    <Link className='logo-box' to='/'><Logo size={60} />docs</Link>
    <nav>{index.map(Module(route))}</nav>
  </div>
