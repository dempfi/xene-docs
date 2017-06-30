import React from 'react'
import { Link } from 'react-router-dom'
import filter from 'lodash-es/filter'
import startsWith from 'lodash-es/startswith'
import { Route } from '../../../../types'

/**
 * Parses href of next formats
 * /dialog.md, #static-match, ../../slack/docs/slackbot.md#slackbot
 */
const parseLink = (href: string): Partial<Route> | void => {
  const [pathname, chapter] = href.split('#')
  const matches = /(?:([^/]*)\/docs\/)?([^/]*).md$/m.exec(pathname)
  if (!matches) return chapter ? { chapter } : undefined
  return { module: matches[1], article: matches[2], chapter }
}

const link = (route: Route, link: Partial<Route>) => {
  const path = [link.module || route.module]
  path.push(path[0] === link.module ? link.article : link.article || route.article)
  path.push(path[1] === link.article ? link.chapter : link.chapter || route.chapter)
  return `/docs/${filter(path, i => !!i).join('/')}`
}

export default (route: Route) => ({ href, children }) => {
  const parsed = parseLink(href)
  return startsWith(href, 'http') || !parsed
    ? <a href={href}>{children}</a>
    : <Link to={link(route, parsed)}>{children}</Link>
}
