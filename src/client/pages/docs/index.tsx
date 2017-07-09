import React from 'react'
import Loader from 'react-progress-2'
import { NavLink } from 'react-router-dom'
import fetchDocs from './docs'
import Sidebar from './sidebar'
import Markdown from './markdown'
import { Documentation, Route } from '../../../types'

type Props = { match: { params: Route } }
type State = { index: Documentation, markdown: string, error?: Error, loading: boolean }

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
    const { index, markdown } = this.state
    return [
      <Sidebar key='sidebar' index={index} route={route} />,
      <Markdown key='content' source={markdown} index={index} route={route} />
    ]
  }

  render() {
    return <div className='docs'>
      <Loader.Component cls='loader' />
      {this.state.markdown && this.content}
    </div>
  }
}
