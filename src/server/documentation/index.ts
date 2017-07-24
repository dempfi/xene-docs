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

const article = async (module: string, article: string) => {
  if (!_docs) await fetch()
  const moduleDocs = find(_docs, { module })
  return find(moduleDocs.articles, { id: article })
}

export default { index, article }
