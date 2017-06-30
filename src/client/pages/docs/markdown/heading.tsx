import React from 'react'
import kebabCase from 'lodash-es/kebabCase'
import { Link } from 'react-router-dom'
import { Route } from '../../../../types'

type Props = { level: number, children: string[] }

const getId = (children: string[]) =>
  kebabCase(children.join().toLowerCase())

const getParens = (children: string[]) =>
  /\(\)/.test(children.join())
    ? <span key='parens' className='parens'>()</span>
    : undefined

const getChildren = (children: string[]) =>
  [children.join().replace('()', ''), getParens(children)]

const withLink = (route: Route, props: Props) => {
  const id = getId(props.children)
  const base = `/docs/${route.module}/`
  const sub = props.level === 1 ? id : `${route.article}/${id}`
  return <Link to={base + sub}>
    <span className='hash'>#</span>
    {getChildren(props.children)}
  </Link>
}

export default (route: Route) => (props: Props) =>
  React.createElement(`h${props.level}`, { id: getId(props.children) }, withLink(route, props))
