import React from 'react'
import Code from '../../../../components/code'

interface IRow { argument?: string, type: string, description: string }
interface ITable { title: string, table: IRow[] }
interface IType { declaration: string, tables: ITable[] }

const clean = (a: string) => a.replace(/<\/?type>/g, '')
const parsed = (a: string) => { try { return JSON.parse(clean(a)) } catch (e) { return } }

const row = ({ argument, type, description }: IRow, i: number) => {
  return <div key={i} className='row'>
    {argument && <span className='argument'>{argument}</span>}
    <span className='row-type'>{argument ? ` (${type}) ` : type}</span>
    <span> — {description}</span>
  </div>
}

const table = ({ table, title }: ITable) => {
  return <div key={title} className='table'>
    <div className='table-title'>{title}</div>
    {table.map(row)}
  </div>
}

export default function(a: string) {
  const type = parsed(a)
  if (!type) return <span />
  return <div className='type'>
    <Code language='type' literal={type.declaration} />
    {type.tables.map(table)}
  </div>
}
