import Type from 'highlight.js'
import core from 'highlight.js/lib/highlight.js'
import syntax from './syntax'

const Highlighter: {[key in keyof typeof Type]: typeof Type[key]} = core
Highlighter.registerLanguage('js', syntax)
Highlighter.registerLanguage('ts', syntax)
Highlighter.configure({
  classPrefix: ''
})

export default Highlighter
