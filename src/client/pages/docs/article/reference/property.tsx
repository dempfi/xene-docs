import React from 'react'
import { API } from '../../../../../types'

export default (property: API.Property) =>
  <div className='declaration' id={property.name.toLowerCase()}>
    <div className='signature'>
      {property.isStatic && <span className='is-static'>static</span>}
      <span className='name'>{property.name}</span>:&nbsp;
      <span className='type'>{property.type}</span>
    </div>
  </div>
