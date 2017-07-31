import React from 'react'
import findIndex from 'lodash-es/findIndex'
import { Link } from 'react-router-dom'
import startCase from 'lodash-es/startCase'
import { Route, Index, Link as ILink } from '../../../../types'

const current = (route: Route, index: Index) => {
  const module = findIndex(index, { id: route.module })
  const article = findIndex(index[module].chapters, { id: route.article })
  return { module, article }
}

const prev = (route: Route, index: Index) => {
  let prevModule: ILink, prevArticle: ILink
  const { article, module } = current(route, index)

  if (article === 0 && module === 0) return
  prevArticle = index[module].chapters[article - 1]
  prevModule = index[module]

  if (!prevArticle) {
    prevModule = index[module - 1]
    prevArticle = prevModule.chapters[prevModule.chapters.length - 1]
  }

  return <Link to={`/docs/${prevModule.id}/${prevArticle.id}`} className='prev'>
    <div className='module'>{prevModule.title}</div>
    <div className='article'>{prevArticle.title}</div>
  </Link>
}

const next = (route: Route, index: Index) => {
  let nextModule: ILink, nextArticle: ILink
  const { article, module } = current(route, index)

  nextArticle = index[module].chapters[article + 1]
  nextModule = index[module]

  if (!nextArticle && !index[module + 1]) return

  if (!nextArticle) {
    nextArticle = index[module + 1].chapters[0]
    nextModule = index[module + 1]
  }

  return <Link to={`/docs/${nextModule.id}/${nextArticle.id}`} className='next'>
    <div className='module'>{nextModule.title}</div>
    <div className='article'>{nextArticle.title}</div>
  </Link>
}

export default ({ route, index }: { route: Route, index: Index }) =>
  <div className='pagination'>
    {prev(route, index)}
    {next(route, index)}
  </div>
