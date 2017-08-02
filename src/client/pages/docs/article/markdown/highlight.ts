import Showdown from 'showdown'
import Highlighter from '../../../../components/code/highlighter'

const LEFT = '<pre><code\\b[^>]*>'
const RIGHT = '</code></pre>'
const FLAGS = 'g'

const htmldecode = (text: string) =>
  text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

const highlight = (_, match, left, right) => {
  const hg = Highlighter.highlight('js', htmldecode(match)).value
  return `<pre class="syntax light"><code>${hg}</code></pre>`
}

const filter = (text: string) =>
  (Showdown as any).helper.replaceRecursiveRegExp(
    text, highlight, LEFT, RIGHT, FLAGS)

export default () => [{ type: 'output', filter }]
