import * as React from 'react'

export default class Searchbar extends React.Component<any, any> {
  render() {
    return <div className='input searchbar'>
      <input type='text' placeholder='Search' />
    </div>
  }
}
