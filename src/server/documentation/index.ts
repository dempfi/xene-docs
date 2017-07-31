import { find } from 'lodash'
import { Article, Index } from '../../types'
import getContent from './docs-content'
import buildIndex from './docs-index'

const MODULES = [
  { name: 'quick-start', path: '/docs' },
  { name: 'core', path: '/packages/core/docs' },
  { name: 'slack', path: '/packages/slack/docs' }
]

let index: Index
let articles: Article[]

const fetch = async () => {
  articles = await getContent(MODULES)
  index = buildIndex(articles)
}

export default {
  async index() {
    if (!index) await fetch()
    return index
  },

  async article(module: string, article: string) {
    if (!articles) await fetch()
    return find(articles, { module, id: article })
  }
}
