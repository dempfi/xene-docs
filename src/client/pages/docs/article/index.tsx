import React from 'react'
import jump from 'jump.js'
import isEqual from 'lodash.isequal'

import * as Types from '../../../../types'
import Pagination from './pagination'
import Markdown from './markdown'
import Reference from './reference'

type Props = { article: Types.Article, route: Types.Route, index: Types.Index }

const jumpByRoute = (route: Types.Route) =>
  jump(`#${route.chapter || route.article}`, { duration: 250, offset: -64 })

export default class Article extends React.Component<Props, {}> {
  currentJumpTarget: Types.Route

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps.article, this.props.article)
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
    if (!isEqual(nextProps.article, this.props.article)) return
    if (isEqual(this.currentJumpTarget, nextProps.route)) return
    jumpByRoute(this.currentJumpTarget = nextProps.route)
  }

  get title() {
    const { article: { type, title, id } } = this.props
    if (!type) return <h1 id={id}>{title}</h1>
    return <h1 id={id}>
      <span className='keyword'>{type}</span>&nbsp;
      <span className={`title ${type}`}>{title}</span>
    </h1>
  }

  render() {
    const { route, article: { content }, index } = this.props
    return <div className='content'>
      {this.title}
      <Markdown source={content.text} route={route} />
      {content.reference && <Reference api={content.reference} route={route} />}
      <Pagination route={route} index={index} />
    </div >
  }
}
