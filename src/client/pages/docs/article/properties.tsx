import React from 'react'
import Markdown from './markdown'
import { API, Route } from '../../../../types'

const Property = (route: Route) => (property: API.Property) =>
  <div className='declaration' id={property.name.toLowerCase()}>
    <div className='signature'>
      {property.isStatic && <span className='static'>static</span>}
      <span className='name'>{property.name}</span>:&nbsp;
      <span className='type'>{property.type}</span>
    </div>
    <Markdown source={property.documentation} route={route} />
  </div>

export default ({ properties, route }: { properties: API.Property[], route: Route }) =>
  <div className='api properties'>
    <h2 id='properties'>Properties</h2>
    {properties.map(Property(route))}
  </div>
