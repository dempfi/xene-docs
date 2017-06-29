export type Route = { module: string, article: string, chapter?: string }
export type Link = { id: string, title: string, chapters: Link[] }
export type Article = Link & { category: string, content: string, prev: string }
export type Module = { module: string, articles: Article[] }
export type Documentation = Module[]
