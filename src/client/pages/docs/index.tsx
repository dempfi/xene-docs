import React from 'react'
import Loader from 'react-progress-2'
import { NavLink } from 'react-router-dom'
import fetchDocs from './docs'
import Sidebar from './sidebar'
import Article from './article'
import * as T from '../../../types'

type Props = { match: { params: T.Route } }
type State = { index: T.Index, article: T.Article, error?: Error, loading: boolean }

export default class Docs extends React.Component<Props, State> {

  componentDidMount() {
    this.controlLoader()
  }

  componentDidUpdate() {
    this.controlLoader()
  }

  componentWillMount() {
    this.loadDocuments(this.props)
  }

  componentWillReceiveProps(next: Props) {
    if (next.match.params.module !== this.props.match.params.module ||
      next.match.params.article !== this.props.match.params.article)
      this.loadDocuments(next)
  }

  loadDocuments(props: Props) {
    this.setState({ loading: true })
    fetchDocs(props.match.params)
      .then(data => this.setState({ ...data, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  controlLoader() {
    this.state.loading ? Loader.show() : Loader.hide()
  }

  get content() {
    const route = this.props.match.params
    return [
      <Article key='content' {...this.state} route={route} />,
      <Sidebar key='sidebar' index={this.state.index} route={route} />
    ]
  }

  render() {
    return <div className='page docs'>
      <Loader.Component cls='loader' />
      {this.state.article && this.content}
    </div>
  }
}
