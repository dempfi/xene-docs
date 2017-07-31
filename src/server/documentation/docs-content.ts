import * as _ from 'lodash'
import * as Github from 'github'
import * as request from 'request-promise-native'
import parseMarkdown from 'parse-md'

import classReference from './class-reference'
import { Article } from '../../types'

type Module = { name: string, path: string }

const gh = new Github()
gh.authenticate({ type: 'token', token: process.env.TOKEN })

const prepareText = (text: string) =>
  text.replace(/<!--(\/?.*?)-->/g, '<$1>').trim()

const getArticle = async (path: string): Promise<Article> => {
  const raw = await request.get(path).then(prepareText)
  const { content, metadata } = parseMarkdown(raw)
  const { text, reference } = classReference(content)
  return { ...metadata, content: { text, reference } }
}

const downloadLinks = (path: string): Promise<string[]> =>
  gh.repos.getContent({ repo: 'xene', owner: 'dempfi', ref: 'docs', path })
    .then(response => response.data.map(i => i.download_url))

const articlesFrom = async (path: string) => {
  const links = await downloadLinks(path)
  return Promise.all(links.map(getArticle))
}

const moduleArticles = async ({ name, path }: Module) => {
  const articles = await articlesFrom(path)
  return articles.map(i => ({ ...i, module: name }))
}

export default async (modules: Module[]): Promise<Article[]> => {
  const allArticles = await Promise.all(modules.map(moduleArticles))
  return [].concat(...allArticles)
}
