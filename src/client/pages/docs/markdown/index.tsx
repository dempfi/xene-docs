import React from 'react'
import jump from 'jump.js'
import RMarkdown from 'react-markdown'
import isEqual from 'lodash-es/isequal'
import CodeBlock from '../../../components/code'
import { Route } from '../../../../types'
import Heading from './heading'
import Html from './html'
import { Link } from './link'

type Props = { source: string, route: Route }

const jumpByRoute = (route: Route) =>
  jump(`#${route.chapter || route.article}`, { duration: 250 })

export default class Markdown extends React.Component<Props, {}> {
  currentJumpTarget: Route

  shouldComponentUpdate(nextProps) {
    return nextProps.source !== this.props.source
  }

  componentWillReceiveProps(nextProps) {
    // Skip start of loading and complete of loading
    if (nextProps.route.article !== this.props.route.article) return
    if (nextProps.source !== this.props.source) return
    if (isEqual(this.currentJumpTarget, nextProps.route)) return
    jumpByRoute(this.currentJumpTarget = nextProps.route)
  }

  componentDidUpdate(prevProps) {
    this.currentJumpTarget = undefined
    jumpByRoute(this.props.route)
  }

  componentDidMount() {
    this.currentJumpTarget = undefined
    jumpByRoute(this.props.route)
  }


  render() {
    return <RMarkdown
      renderers={{
        Heading: Heading(this.props.route),
        CodeBlock,/* Link,*/ HtmlBlock: Html, HtmlInline: Html
      }}
      source={this.props.source}
      className='content'
    />
  }
}
