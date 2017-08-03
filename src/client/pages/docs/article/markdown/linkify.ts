import Showdown from 'showdown'
import { Route } from '../../../../../types'

const LEFT = '<a href="(?!http)'
const RIGHT = '">.*?</a>'
const FLAGS = 'g'

const parseRoute = (href: string): Partial<Route> | void => {
  const [pathname, chapter] = href.split('#')
  const matches = /(?:([^/]*)\/docs\/)?([^/]*).md$/m.exec(pathname)
  if (!matches) return chapter ? { chapter } : undefined
  return { module: matches[1], article: matches[2], chapter }
}

const transformHref = (route: Route, link: Partial<Route>) => {
  const path = [link.module || route.module]
  path.push(path[0] === link.module ? link.article : link.article || route.article)
  path.push(path[1] === link.article ? link.chapter : link.chapter || route.chapter)
  return `/docs/${path.filter(i => !!i).join('/')}`
}

const linkify = (route: Route) => (_, match, left, right) => {
  const parsedRoute = parseRoute(match)
  if (!parsedRoute) return `${left}${match}${right}`
  return `${left}${transformHref(route, parsedRoute)}${right}`
}

const filter = (text: string, _, options: any) =>
  (Showdown as any).helper.replaceRecursiveRegExp(
    text, linkify(options.route), LEFT, RIGHT, FLAGS)

export default () => [{ type: 'output', filter }]
