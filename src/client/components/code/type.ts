export default function(hljs) {
  const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*'
  const TYPE_IDENT_RE = IDENT_RE + '(\\s*<\\s*' + IDENT_RE + '\\s*>\\s*)?'
  const KEYWORDS = {
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

  const TITLE = {
    className: 'minor-title',
    begin: '[A-Za-z$_][0-9A-Za-z$_]*',
    relevance: 0
  }
  const PARAMS_CONTAINS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE,
    TITLE
  ]

  return {
    keywords: KEYWORDS,
    contains: [
      {
        className: 'type-returns',
        begin: /(->)/,
        relevance: 10
      },
      {
        className: 'function',
        begin: TYPE_IDENT_RE + '\\s*\\(', end: /\)\s*({|=>)/,
        returnBegin: true,
        excludeEnd: true,
        relevance: 0,
        keywords: KEYWORDS,
        contains: [
          { ...TITLE, className: 'title' },
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
      },]
  }
}
