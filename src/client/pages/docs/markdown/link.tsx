import React from 'react'
import Router from 'next/router'

const navigate = (href: string) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault()
  console.log(href)
  const { query, pathname } = Router
  const [article, chapter] = href.split('#')
  if (article) query.article = article
  if (chapter) query.chapter = chapter
  Router.push({ pathname, query })
}

const isGlobal = str => str.startsWith('http')
export const Link: React.SFC<{ href: string }> = ({ href, children }) =>
  isGlobal(href) ? <a>{children}</a> : <a onClick={navigate(href)}>{children}</a>
