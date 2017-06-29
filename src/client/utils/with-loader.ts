import React from 'react'
import _ from 'lodash'

type Loader = (a: any) => Promise<any>
type Component = (key: any) => JSX.Element
export type State<T> = { data: T, error?: Error, loading: boolean, promise?: Promise<T> }

export default <S>(prop: string, loader: Loader, component: Component) =>
  class Requester extends React.Component<any, State<S>> {
    constructor(a) {
      super(a)
      this.state = { data: undefined, loading: true, error: null, promise: null }
    }

    componentWillMount() { this.load(this.props)}
    componentWillReceiveProps(next) { this.load(next) }

    load(props) {
      const promise = loader(props)
      this.setState({ loading: true, promise, data: undefined })
      promise.then(data => this.setState({ data, loading: false }))
      promise.catch(error => this.setState({ error, loading: false }))
      return promise
    }

    render() {
      return React.createElement(component, { ...this.props, [prop]: { ...this.state } })
    }
  }
