import loadDocs from './load-docs'
import { find, cloneDeep } from 'lodash'
import { Documentation, Module } from '../../types'

let _index: Documentation
let _docs: Documentation

const fetch = async () => {
  _docs = await loadDocs()
  _index = cloneDeep(_docs)
  _index.forEach(p => p.articles.forEach(a => a.content = ''))
}

const index = async () => {
  if (!_index) await fetch()
  return _index
}

const markdown = async (module: string, article: string) => {
  if (!_docs) await fetch()
  const moduleDocs = find(_docs, { module })
  const articleDocs = find(moduleDocs.articles, { id: article })
  return articleDocs ? articleDocs.content : null
}

export default { index, markdown }
