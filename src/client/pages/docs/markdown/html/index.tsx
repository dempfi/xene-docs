import * as React from 'react'
import { find } from 'lodash'
import type from './type'
import intro from './intro'

const renderers = {
  '<type>': type,
  '<intro>': intro
}

export default class Html extends React.PureComponent<{ literal: string }, {}> {
  render() {
    const { literal } = this.props
    const renderer = find(renderers, (_, key) => literal.startsWith(key))
    return renderer ? renderer(literal) : <span />
  }
}
