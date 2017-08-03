import Showdown from 'showdown'
import linkify from './linkify'
import highlight from './highlight'

Showdown.setFlavor('github')
Showdown.setOption('tables', true as any)
Showdown.setOption('simpleLineBreaks', false as any)
Showdown.setOption('ghCompatibleHeaderId', true as any)
Showdown.extension('highlight', highlight)
Showdown.extension('linkify', linkify)

export default (text: string, route) =>
  new Showdown.Converter({
    extensions: ['highlight', 'linkify'], route
  } as any).makeHtml(text)
