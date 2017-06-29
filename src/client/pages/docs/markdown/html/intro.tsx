import * as React from 'react'
const clean = (a: string) => a.replace(/<\/?intro>/g, '')

export default function(a: string) {
  return <div className='intro'>{clean(a)}</div>
}
