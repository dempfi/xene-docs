import Showdown from 'showdown'
import { Route } from '../../../../../types'

const LEFT = '<a href="(?!http)'
const RIGHT = '">[^<]*</a>'
const FLAGS = 'g'

const linkify = (_, match, left, right) => {
  console.log(match)
  return `${left}${match}${right}`
}

const filter = (text: string, _, { route }: { route: Route }) =>
  (Showdown as any).helper.replaceRecursiveRegExp(
    text, linkify, LEFT, RIGHT, FLAGS)

export default () => [{ type: 'output', filter }]
