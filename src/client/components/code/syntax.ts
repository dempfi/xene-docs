export default function (hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*'
  var TYPE_IDENT_RE = IDENT_RE + '(\\s*<\\s*' + IDENT_RE + '\\s*>\\s*)?'
  var TITLE_RE = /\b[A-Z][0-9A-Za-z$_]*\b/
  var KEYWORDS = {
    keyword:
    'in of if for while finally var new function do return void else break catch ' +
    'instanceof with throw case default try this switch continue typeof delete ' +
    'let yield const export super debugger as async await static abstract get set ' +
    // ECMAScript 6 modules import
    'import from as public private protected implements enum'
    ,
    literal:
    'true false null undefined NaN Infinity',
    built_in:
    'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
    'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
    'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
    'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
    'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
    'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
    'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
    'Promise any string number boolean'
  }

  var TITLE = {
    className: 'minor-title',
    begin: TITLE_RE,
    relevance: 0
  }

  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  }
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  }
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  }
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE,
    TITLE
  ])

  return {
    aliases: ['ts', 'tsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'regular',
        begin: /[():]/
      },
      {
        className: 'operator',
        begin: /(\+|-|=>|=<|>=|=)/,
        relevance: 10
      },
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE
        ],
        relevance: 0
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          { beginKeywords: 'extends' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      },
      {
        beginKeywords: 'for switch while', skip: true
      },
      {
        className: 'function',
        begin: TYPE_IDENT_RE + '\\s*\\(', end: /\)\s*({|=>)/,
        returnBegin: true,
        excludeEnd: true,
        relevance: 0,
        keywords: KEYWORDS,
        contains: [
          TITLE,
          {
            begin: hljs.IDENT_RE + '\\s*(<|\\()', returnBegin: true,
            contains: [hljs.TITLE_MODE],
            relevance: 0
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            endsParent: true,
            keywords: KEYWORDS,
            relevance: 0,
            contains: PARAMS_CONTAINS
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.REGEXP_MODE,
      TITLE
    ],
    illegal: '#(?!!)'
  }
}
