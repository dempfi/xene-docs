import * as React from 'react'
import * as Highlighter from 'react-lowlight'
import typescript from './typescript'
import shell from './shell'
import type from './type'

Highlighter.registerLanguage('ts', typescript)
Highlighter.registerLanguage('type', type)
Highlighter.registerLanguage('sh', shell)

interface CodeProps { language: string, literal: string, theme?: 'mirage' }

export default class Code extends React.Component<CodeProps, {}> {
  render() {
    return <Highlighter
      className={'syntax ' + (this.props.theme || 'light')}
      language={this.props.language}
      value={this.props.literal}
      prefix=''
    />
  }
}
