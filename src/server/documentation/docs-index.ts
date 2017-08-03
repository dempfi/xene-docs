import * as _ from 'lodash'
import { Article, Index, Link, API, Reference } from '../../types'

const chapterId = (str: string) => _.kebabCase(str.toLowerCase())

const chapterFromProp = (node: API.Member): Link => {
  const title = node.name || 'constructor'
  return { id: chapterId(title), title, chapters: [] }
}

const chaptersFromProperties = (ref?: Reference): Link[] => {
  if (!ref) return []
  const chapters = ref.properties.map(chapterFromProp)
  return [{ id: 'properties', title: 'Properties', chapters }]
}

const chaptersFromMethods = (ref?: Reference): Link[] => {
  if (!ref) return []
  return [{
    id: 'methods', title: 'Methods', chapters: ref.methods.map(i => ({
      id: chapterId(i.name), title: `${i.name}()`, chapters: []
    }))
  }]
}

const getOrder = (arr: Link[], level: number): Link[] => {
  let place = arr
  for (let i = level - 1; i >= 0; i--) {
    place = place[place.length - 1].chapters
  }
  return place
}

const chaptersFromText = (text: string): Link[] => {
  let match
  const result = []
  const rx = /(##+)\s*(.+)/g
  while ((match = rx.exec(text)) !== null) {
    const title = match[2]
    const id = chapterId(title)
    const level = match[1].length - 2
    const place = level === 0 ? result : getOrder(result, level)
    place.push({ id, title, chapters: [] })
  }
  return result
}

const buildArticles = ({ id, title, type, content: { text, reference } }: Article): Link => {
  const textChapters = chaptersFromText(text)
  const constructor = reference ? chapterFromProp(reference.constructor) : []
  const properties = chaptersFromProperties(reference)
  const methods = chaptersFromMethods(reference)
  const chapters = textChapters.concat(properties, constructor, methods)
  return { id, title, type, chapters }
}

const sortArticles = (articles: Article[]): Article[] => {
  const head = articles.find(i => !i.prev)
  let current: string = head.id
  const sorted: Article[] = [head]
  const tmp = _.without(articles, head).reduce(
    (tmp, i) => tmp.set(i.prev, i),
    new Map<string, Article>())

  while (sorted.length < articles.length) {
    const next = tmp.get(current)
    sorted.push(next)
    current = next.id
  }

  return sorted
}

export default (articles: Article[]): Index => {
  const modules = _.groupBy(articles, 'module')
  const ids = _.keys(modules)
  return ids.map(id => ({
    id, title: _.startCase(id),
    chapters: sortArticles(modules[id]).map(buildArticles)
  }))
}
