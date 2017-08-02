import React from 'react'
import Markdown from 'react-markdown'

import { Route } from '../../../../../types'
import CodeBlock from '../../../../components/code'
import Heading from './heading'
import Link from './link'

export default ({ source, route }: { source: string, route }) =>
  <Markdown source={source} className='markdown' renderers={{
    Link: Link(route), Heading: Heading(route), CodeBlock
  }} />
