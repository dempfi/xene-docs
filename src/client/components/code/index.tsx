import React from 'react'
import Highlighter from './highlighter'

type Props = { language: string, literal: string, theme?: 'mirage' }

export default (props: Props) =>
  <pre className={`syntax ${props.theme || 'light'}`}>
    <code dangerouslySetInnerHTML={{
      __html: Highlighter.highlight(props.language, props.literal).value
    }} />
  </pre>
