const rx = {
  type: /<!--type-->(\s|.)+?<!--\/type-->/g,
  table: /\*\*(\w*?)\*\*\n+\|((.|\n)+?)\|(\n[^\|]|$)/g,
  declaration: /```\w*?\n(.*?)\n```/,
  divider: /\n\|[-|:]+\|\n/g
}

export default function(text: string) {
  return text.replace(rx.type, parseType)
}

function parseType(text: string) {
  let match
  const tables = []
  while ((match = rx.table.exec(text)) !== null) {
    tables.push({ title: match[1], table: parseTable(match[2]) })
  }
  const declaration = text.match(rx.declaration)[1]
  return '<type>\n' + JSON.stringify({ declaration, tables }) + '\n</type>\n'
}

function parseTable(table: string) {
  const [headStr, contentStr] = table.split(rx.divider)
  const head = parseRow(headStr).map(s => s.toLowerCase())
  const content = contentStr.split(/\n/).map(parseRow)
  return content.map(row => {
    const obj = {}
    head.forEach((k, i) => obj[k] = row[i])
    return obj
  })
}

function parseRow(line: string): string[] {
  const elements = line.split(/\|/)
  return elements.filter(a => !!a).map(a => a.trim())
}
