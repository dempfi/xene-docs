import React from 'react'

type Props = { size: number, textSize?: number, className?: string }

export default ({ size, textSize, className }: Props) => {
  return <div className={`logo ${className || ''}`} style={{ width: size, height: size }}>
    <object className='icon' type='image/svg+xml' data='/imgs/xene.svg' />
    <span className='shadow' />
  </div>
}
// <object
// className='text'
// type='image/svg+xml'
// data='/static/imgs/xene-text.svg'
// width={textSize || size}
// />
