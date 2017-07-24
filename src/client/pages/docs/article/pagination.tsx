import React from 'react'
import find from 'lodash-es/findIndex'
import { Link } from 'react-router-dom'
import startCase from 'lodash-es/startCase'
import { Route, Documentation } from '../../../../types'

const current = (route: Route, modules: Documentation) => {
  const module = find(modules, { module: route.module })
  const article = find(modules[module].articles, { id: route.article })
  return { module, article }
}

const prev = (route: Route, modules: Documentation) => {
  const prev = { module: route.module, article: modules[0].articles[0] }
  const { article, module } = current(route, modules)
  if (article === 0 && module === 0) return

  prev.article = modules[module].articles[article - 1]

  if (!prev.article) {
    const prevModule = modules[module - 1]
    prev.article = prevModule.articles[prevModule.articles.length - 1]
    prev.module = prevModule.module
  }

  return <Link to={`/docs/${prev.module}/${prev.article.id}`} className='prev'>
    <div className='module'>{startCase(prev.module)}</div>
    <div className='article'>{prev.article.title}</div>
  </Link>
}

const next = (route: Route, modules: Documentation) => {
  const next = { module: route.module, article: modules[0].articles[0] }
  const { article, module } = current(route, modules)
  next.article = modules[module].articles[article + 1]
  if (!next.article && !modules[module + 1]) return

  if (!next.article) {
    next.article = modules[module + 1].articles[0]
    next.module = modules[module + 1].module
  }

  return <Link to={`/docs/${next.module}/${next.article.id}`} className='next'>
    <div className='module'>{startCase(next.module)}</div>
    <div className='article'>{next.article.title}</div>
  </Link>
}

export default ({ route, index }: { route: Route, index: Documentation }) =>
  <div className='pagination'>
    {prev(route, index)}
    {next(route, index)}
  </div>
