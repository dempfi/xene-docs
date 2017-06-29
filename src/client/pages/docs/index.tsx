import React from 'react'
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
export default withLoader('docs', loader, ({ docs, match }: Props) => {
  if (docs.loading && !docs.data) return <div>Loading...</div>
  return <div className='docs'>
    {docs.loading && <div className='loader' />}
    <Sidebar index={docs.data.index} route={match.params} />
    <Markdown source={docs.data.markdown} />
  </div>
})
