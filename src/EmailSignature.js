import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import '../public/styles/reset.css'
import '../public/styles/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <div className='step-one'>
            <StepOne />
          </div>
          <div className='step-two'>
            <StepTwo />
          </div>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
