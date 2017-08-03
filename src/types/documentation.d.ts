import { Method, Property } from './api'

export type Route = { module: string, article: string, chapter?: string }
export type Link = { id: string, title: string, chapters: Link[], type?: 'class' }
export type Reference = { constructor: Method, properties: Property[], methods: Method[] }
export type Index = Link[]

export type Article = {
  content: {
    reference?: Reference
    text: string
  }
  type?: 'class'
  module: string
  prev?: string
  title: string
  id: string
}
