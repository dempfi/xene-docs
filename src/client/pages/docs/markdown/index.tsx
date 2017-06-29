import React from 'react'
import RMarkdown from 'react-markdown'
import CodeBlock from '../../../components/code'
import { Heading } from './heading'
import { Link } from './link'
import Html from './html'

export default ({source}: {source: string}) => <RMarkdown
  renderers={{ CodeBlock, /*Heading, Link,*/ HtmlBlock: Html, HtmlInline: Html }}
  className='content'
  source={source}
/>
