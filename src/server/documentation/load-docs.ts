import * as _ from 'lodash'
import * as Github from 'github'
import * as request from 'request-promise-native'
import parseMarkdown from 'parse-md'

import typesToJson from './types-to-json'
import { Link, Module, Article, Documentation } from '../../types'

const gh = new Github()
gh.authenticate({ type: 'token', token: process.env.TOKEN })

function chapterOrder(arr: Link[], level: number): Link[] {
  let place = arr
  for (let i = level - 1; i >= 0; i--) {
    place = place[place.length - 1].chapters
  }
  return place
}

const articleChapters = (text: string): Link[] => {
  let match
  const result = []
  const rx = /(##+)\s*(.+)/g
  while ((match = rx.exec(text)) !== null) {
    const title = match[2]
    const id = _.kebabCase(title.toLowerCase())
    const level = match[1].length - 2
    const place = level === 0 ? result : chapterOrder(result, level)
    place.push({ id, title, chapters: [] })
  }
  return result
}

const articleMetadata = (article: string): Article => {
  const { content, metadata: { id, prev, category } } = parseMarkdown(article)
  const chapters = articleChapters(content)
  return { content, id, title: _.startCase(id), prev, category, chapters }
}

const prepareMarkdown = (content: string) =>
  typesToJson(content).replace(/<!--(\/?.*?)-->/g, '<$1>').trim()

const parsedArticle = (path: string): Promise<Article> =>
  request.get(path).then<string>(prepareMarkdown).then(articleMetadata)

const articlesDownloadLinks = (module: string): Promise<string[]> =>
  gh.repos.getContent({ repo: 'xene', owner: 'dempfi', ref: 'docs', path: `/packages/${module}/docs` })
    .then(response => response.data.map(i => i.download_url))

const sortArticles = (docs: Article[]): Article[] => {
  const head = docs.find(i => !i.prev)
  let current: string = head.id
  const sorted: Article[] = [head]
  const tmp = _.without(docs, head).reduce((tmp, i) => tmp.set(i.prev, i), new Map<string, Article>())

  while (sorted.length < docs.length) {
    const next = tmp.get(current)
    sorted.push(next)
    current = next.id
  }

  return sorted
}

const sortedArticles = (module: string): Promise<Article[]> =>
  articlesDownloadLinks(module).then(i => Promise.all(i.map(parsedArticle))).then(sortArticles)

const moduleDocs = (module: string): Promise<Module> =>
  sortedArticles(module).then(articles => ({ module, articles }))

export default () => Promise.all(['core'].map(moduleDocs))