import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import '../public/styles/reset.css'
import '../public/styles/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <div className='step-one'></div>
          <div className='step-two'></div>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
