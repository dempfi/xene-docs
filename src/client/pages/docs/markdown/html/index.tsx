import React from 'react'
import * as _ from 'lodash'
import type from './type'
import intro from './intro'

const renderers = [{ type: '<type>', renderer: type }, { type: '<intro>', renderer: intro }]
export default ({ literal }: { literal: string }) => {
  const renderer = renderers.find(({ type }) => literal.startsWith(type))
  return renderer ? renderer.renderer(literal) : <span />
}
