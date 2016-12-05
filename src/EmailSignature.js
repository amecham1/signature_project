import React from 'react'
import { render } from 'react-dom'
import '../public/styles/reset.css'
import '../public/styles/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>hello</div>
    )
  }
})

render(<App />, document.getElementById('app'))
