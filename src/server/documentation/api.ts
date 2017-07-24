import * as fs from 'fs'
import { resolve } from 'path'
import * as typedocs from 'typedocs'
import { Article } from '../../types'

const re = /<\s*api:(.*):(.*)\s*>/i

const path = (...args) =>
  resolve(process.cwd(), 'node_modules', '@xene', ...args)

const extract = (content: string): [string, string, string] => {
  const match = content.match(re)
  return [content.replace(re, ''), match[1].trim(), match[2].trim()]
}

const has = (content: string) =>
  re.test(content)

export default (article: Article) => {
  if (!has(article.content)) return article
  const [content, module, file] = extract(article.content)
  const filePath = path(module, 'dist', `${file}.d.ts`)
  const data = typedocs.generate([filePath])
  const api = data.find(i => i.name.toLowerCase() === file) as any
  return { ...article, content, api }
}
