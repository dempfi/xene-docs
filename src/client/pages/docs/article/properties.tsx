import React from 'react'
import { API } from '../../../../types'

const Property = (property: API.Property) =>
  <div className='declaration' id={property.name.toLowerCase()}>
    <div className='signature'>
      {property.isStatic && <span className='static'>static</span>}
      <span className='name'>{property.name}</span>:&nbsp;
      <span className='type'>{property.type}</span>
    </div>
  </div>

export default ({ properties }: { properties: API.Property[] }) =>
  <div className='api properties'>
    <h2 id='properties'>Properties</h2>
    {properties.map(Property)}
  </div>
