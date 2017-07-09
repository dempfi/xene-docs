import React from 'react'
import jump from 'jump.js'
import RMarkdown from 'react-markdown'
import isEqual from 'lodash-es/isEqual'

import { Route, Documentation } from '../../../../types'
import CodeBlock from '../../../components/code'
import Pagination from './pagination'
import Heading from './heading'
import Html from './html'
import Link from './link'

type Props = { source: string, route: Route, index: Documentation }

const jumpByRoute = (route: Route) =>
  jump(`#${route.chapter || route.article}`, { duration: 250 })

export default class Markdown extends React.Component<Props, {}> {
  currentJumpTarget: Route

  shouldComponentUpdate(nextProps) {
    return nextProps.source !== this.props.source
  }

  componentDidUpdate(prevProps) {
    this.currentJumpTarget = undefined
    jumpByRoute(this.props.route)
  }

  componentDidMount() {
    this.currentJumpTarget = undefined
    jumpByRoute(this.props.route)
  }

  componentWillReceiveProps(nextProps) {
    // Skip start of loading and complete of loading
    if (nextProps.route.article !== this.props.route.article) return
    if (nextProps.source !== this.props.source) return
    if (isEqual(this.currentJumpTarget, nextProps.route)) return
    jumpByRoute(this.currentJumpTarget = nextProps.route)
  }

  render() {
    const { route, source, index } = this.props
    return <div className='content'>
      <RMarkdown source={source}
        className='markdown'
        renderers={{
          Link: Link(route), Heading: Heading(route),
          CodeBlock, HtmlBlock: Html, HtmlInline: Html
        }} />
      <Pagination route={route} index={index} />
    </div>
  }
}
