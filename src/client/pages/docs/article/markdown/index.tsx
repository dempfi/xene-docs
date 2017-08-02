import React from 'react'
import Showdown from './showdown'
import { Route } from '../../../../../types'

type Props = { source: string, route: Route }

export default ({ route, source }: Props) =>
  <div className='markdown' dangerouslySetInnerHTML={{
    __html: Showdown(source, route)
  }} />
