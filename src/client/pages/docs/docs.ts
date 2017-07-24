import { Documentation, Article } from '../../../types'

type Docs = { index: Documentation, article: Article }
export default async ({module, article}: { module: string, article: string }): Promise<Docs> => {
  const docs = await fetch(`/api/${module}/${article}`)
  return docs.json()
}
