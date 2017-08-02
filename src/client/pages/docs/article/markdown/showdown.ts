import Showdown from 'showdown'
import linkify from './linkify'
import highlight from './highlight'

Showdown.setFlavor('github')
Showdown.setOption('tables', true as any)
Showdown.setOption('simpleLineBreaks', false as any)
Showdown.setOption('ghCompatibleHeaderId', true as any)
Showdown.extension('highlight', highlight)
Showdown.extension('links', linkify)

export default (text: string, route) =>
  new Showdown.Converter({
    extensions: ['highlight', 'links'], route
  } as any).makeHtml(text)
