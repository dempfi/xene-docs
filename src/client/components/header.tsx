import React from 'react'
import Logo from './text-logo'
import { Link } from 'react-router-dom'

export default () =>
  <div className='header'>
    <div className='content'>
      <Link className='logo-box' to='/'><Logo size={86} /></Link>
      {/* <nav>
        <li><Link to='/docs/quick-start'><span className='quick-start' />Quick Start</Link></li>
        <li><Link to='/docs/core'><span className='core' />Core</Link></li>
        <li><Link to='/docs/slack'><span className='slack' />Slack</Link></li>
      </nav> */}
      <div className='buttons'>
        <a href='https://github.com/dempfi/xene' className='link'><span className='github' />github</a>
        <Link to='/docs' className='button'>get started<span className='arrow' /></Link>
      </div>
    </div>
  </div>
