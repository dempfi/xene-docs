import some from 'lodash-es/some'
import { Route, Link } from '../../../../types'

const isActive = (active: Route, current: Partial<Route>) =>
  current.module === active.module &&
  current.article === active.article &&
  current.chapter === active.chapter

const hasActive = (active: Route, current: Partial<Route> & { chapters: Link[] }) => {
  if (isActive(active, current)) return true
  return some(current.chapters, i => hasActive(active, {
    ...current, chapters: i.chapters, chapter: i.id
  }))
}


export default hasActive
