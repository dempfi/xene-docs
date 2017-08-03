import * as fs from 'fs'
import { resolve } from 'path'
import * as typedocs from 'typedocs'
import { API, Reference } from '../../types'

const re = /<\s*api:(.*):(.*)\s*>/i

const path = (...args) =>
  resolve(process.cwd(), 'node_modules', '@xene', ...args)

const extractFrom = (text: string): [string, string] => {
  const match = text.match(re)
  return [match[1].trim(), match[2].trim()]
}

const has = (content: string) =>
  re.test(content)

const sort = (a: API.Member, b: API.Member): 1 | -1 | 0 => {
  if (a.kind !== b.kind) return a.kind === 141 ? -1 : 1
  if (a.isStatic === b.isStatic) return 1
  if (a.isStatic && !b.isStatic) return a.kind === 141 ? 1 : -1
  if (!a.isStatic && b.isStatic) return a.kind === 141 ? -1 : 1
}

export default (text: string): { text: string, reference?: Reference } => {
  if (!has(text)) return { text }
  const [module, file] = extractFrom(text)
  const filePath = path(module, 'dist', `${file}.d.ts`)
  const data = typedocs.generate([filePath])
  const reference = data.find(i => i.name.toLowerCase() === file)
  const constructor = reference.members.find(i => i.kind === 143 && !i.type)
  const methods = reference.members.filter(i => i.kind === 143 && i !== constructor)
  const properties = reference.members.filter(i => i.kind === 141)
  return {
    text: text.replace(re, ''), reference: {
      constructor, methods, properties
    }
  }
}
