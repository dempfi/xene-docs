import React from 'react'
import Module from './module'
import Logo from '../../../components/logo'
import { Documentation } from '../../../../types'

type Props = { index: Documentation }
export default (props: Props) =>
  <div className='sidebar'>
    <Logo size={56} />
    <nav>{props.index.map(Module)}</nav>
  </div>
