import React from 'react'
import jump from 'jump.js'
import isEqual from 'lodash-es/isEqual'

import * as Types from '../../../../types'
import Pagination from './pagination'
import Markdown from './markdown'
import API from './api'

type Props = { article: Types.Article, route: Types.Route, index: Types.Index }

const jumpByRoute = (route: Types.Route) =>
  jump(`#${route.chapter || route.article}`, { duration: 250 })

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

  render() {
    const { route, article, index } = this.props
    return <div className='content'>
      <Markdown source={article.content.text} route={route} />
      {article.content.reference && <API api={article.content.reference} route={route} />}
      <Pagination route={route} index={index} />
    </div>
  }
}
