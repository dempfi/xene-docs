import * as React from 'react'
import { kebabCase } from 'lodash'
import { Link } from './link'

type Props = { level: number, children: string[] }

const getId = (children: string[]) =>
  kebabCase(children.join().toLowerCase())

const getParens = (children: string[]) =>
  /\(\)/.test(children.join())
    ? <span key='parens' className='parens'>()</span>
    : undefined

const getChildren = (children: string[]) =>
  [children.join().replace('()', ''), getParens(children)]

const link = (props: Props, children) => {
  const id = getId(props.children)
  const href = props.level === 1 ? id : '#' + id
  return <Link key={href} href={href}>
    <span className='hash'>#</span>{children}
  </Link>
}

export const Heading: React.SFC<Props> = (props: Props) =>
  React.createElement(
    `h${props.level}`,
    { id: getId(props.children) },
    link(props, getChildren(props.children)))
