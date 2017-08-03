import React from 'react'
import Showdown from './showdown'
import { withRouter } from 'react-router-dom'
import { Route } from '../../../../../types'

type Props = { source: string, route: Route, history: any }

const onClick = history => (event: React.MouseEvent<HTMLElement>) => {
  const anchor = (event.target as HTMLElement).closest('a') as HTMLAnchorElement
  if (!anchor || !anchor.getAttribute('href')) return
  const href = anchor.getAttribute('href')
  if (href.indexOf('http') === 0) return
  event.preventDefault()
  history.push(href)
}

const Markdown = ({ route, source, history }: Props) =>
  <div className='markdown' onClick={onClick(history)} dangerouslySetInnerHTML={{
    __html: Showdown(source, route)
  }} />

export default withRouter(Markdown)
