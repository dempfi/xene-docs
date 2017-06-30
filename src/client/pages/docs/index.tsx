import React from 'react'
import Loader from 'react-progress-2'
import { NavLink } from 'react-router-dom'
import withLoader, { State } from '../../utils/with-loader'
import docs from './docs'
import Sidebar from './sidebar'
import Markdown from './markdown'
import { Documentation, Route } from '../../../types'

type Props = {
  docs: State<{ index: Documentation, markdown: string }>
  match: { params: Route }
}

const loader = a => docs(a.match.params)
const controlLoader = (loading: boolean) => {
  try { loading ? Loader.show() : Loader.hide() } catch (e) { }
}

export default withLoader('docs', loader, ({ docs, match }: Props) => {
  if (docs.loading && !docs.data) return <div>Loading...</div>
  controlLoader(docs.loading)
  return <div className='docs'>
    <Loader.Component cls='loader' />
    <Sidebar index={docs.data.index} route={match.params} />
    <Markdown source={docs.data.markdown} route={match.params} />
  </div>
})
