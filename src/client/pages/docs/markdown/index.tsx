import * as React from 'react'
import * as RMarkdown from 'react-markdown'
import CodeBlock from '../../../components/code'
import { Heading } from './heading'
import { Link } from './link'
import Html from './html'

export const Markdown: React.SFC<{ source: string }> = (props) => <RMarkdown
  renderers={{ CodeBlock, Heading, Link, HtmlBlock: Html, HtmlInline: Html }}
  source={props.source}
  className='content'
/>
