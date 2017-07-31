import { ClassDeclaration } from './api'

export type Route = { module: string, article: string, chapter?: string }
export type Link = { id: string, title: string, chapters: Link[], category?: string }
export type Index = Link[]

export type Article = {
  content: {
    reference?: ClassDeclaration
    text: string
  }
  category: string
  module: string
  prev?: string
  id: string
}
