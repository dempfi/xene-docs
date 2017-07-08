import * as React from 'react'
import Logo from '../../components/logo'
import Code from '../../components/code'

const ex = `class PizzaDialog extends Xene.Dialog {
  async talk() {
    const {ask, message, parse, deliverPizza} = this
    await message("Great, let me place your pizza order.")
    let {type, toppings} = await parse(typeAndToppingsParser)
    if (!type) type = await ask("What type of pizza?", typeParser)
    if (!toppings) toppings = await ask("Toppings?", toppingsParser)

    await deliverPizza(type, toppings)
    await message(\`🎉 Your pizza with \${toppings} is on the way.\`)
  }
}`

export const Main: React.SFC<{}> = () => <div className='page-main'>
  <div className='header'>
    <div className='text' />
    <div className='buttons'>
      <a href='https://github.com/dempfi/xene' className='link'><span className='github' />github</a>
      <a href='/docs' className='button'>get started<span className='arrow' /></a>
    </div>
  </div>

  <div className='hero'>
    <Logo size={104} />
    <h1 className='headline'>
      JS library for<br />
      building great bots</h1>
    <div className='subline'>
      build and connect intelligent bots to converse<br />
      with users wherever they are with clean, simple API</div>
  </div>

  <div className='feature'>
    <div>
      <h2>Just <code>ask</code>, <code>parse</code> and <code>message</code></h2>
      <div className='content'>
        <p>
          Xene provides common, simple API<br />
          so you can focus on what makes your<br />
          bot special, not reinventing the wheel. <br /><br />
          All you need is to use <code>ask</code>, &nbsp;
          <code>parse</code><br /> and <code>message</code>&nbsp;
          your users to bring<br /> your bot alive.
          <br /><br />
          <a href='/docs' className='button'>Learn more<span className='arrow' /></a>
        </p>
        <Code language='ts' literal={ex} />
      </div>
    </div>
  </div>

  <div className='footer'>
    <span>Xene is released under terms of Apache 2.0 License</span>
    <span>Made with ❤️ by <a className='link' href='https://github.com/dempfi'>@dempfi</a></span>
  </div>
</div>
