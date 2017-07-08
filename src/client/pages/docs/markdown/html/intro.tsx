import * as React from 'react'
const clean = (a: string) => a.replace(/<\/?intro>/g, '')

export default (a: string) =>
  <div className='intro'>{clean(a)}</div>
