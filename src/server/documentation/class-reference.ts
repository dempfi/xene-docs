import * as fs from 'fs'
import { resolve } from 'path'
import * as typedocs from 'typedocs'
import { ClassDeclaration } from '../../types/api'

const re = /<\s*api:(.*):(.*)\s*>/i

const path = (...args) =>
  resolve(process.cwd(), 'node_modules', '@xene', ...args)

const extractFrom = (text: string): [string, string] => {
  const match = text.match(re)
  return [match[1].trim(), match[2].trim()]
}

const has = (content: string) =>
  re.test(content)

export default (text: string): { text: string, reference?: ClassDeclaration } => {
  if (!has(text)) return { text }
  const [module, file] = extractFrom(text)
  const filePath = path(module, 'dist', `${file}.d.ts`)
  const data = typedocs.generate([filePath])
  const reference = data.find(i => i.name.toLowerCase() === file) as any
  return { text: text.replace(re, ''), reference }
}
