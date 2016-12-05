import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import '../public/styles/reset.css'
import '../public/styles/style.css'
const { string } = React.PropTypes

const App = React.createClass({
  propTypes: {
    nameValue: string
  },
  getInitialState () {
    return {
      nameValue: '',
      jobValue: '',
      phoneValue: '',
      emailValue: ''
    }
  },
  handleFullName (event) {
    console.log(this.state)
    this.setState({
      nameValue: event.target.value
    })
  },
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <div className='step-one'>
            <StepOne
              nameValue={this.state.nameValue}
              jobValue={this.jobValue}
              phoneValue={this.phoneValue}
              emailValue={this.emailValue}
              handleFullName={this.handleFullName}
            />
          </div>
          <div className='step-two'>
            <StepTwo
              nameValue={this.state.nameValue}
            />
          </div>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
