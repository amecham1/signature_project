import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import StepOneTitle from './StepOneTitle'
import FullName from './FullName'
import JobTitle from './JobTitle'
import PhoneNumber from './PhoneNumber'
import EmailAddress from './EmailAddress'
import CheckFrontDesk from './CheckFrontDesk'
// import StepOne from './StepOne'
// import StepTwo from './StepTwo'
import StepTwoTitle from './StepTwoTitle'
import SignatureCard from './SignatureCard'
import '../public/styles/reset.css'
import '../public/styles/style.css'
// const { string } = React.PropTypes

const App = React.createClass({
  // propTypes: {
  //   checked: string
  // },
  getInitialState () {
    return {
      nameValue: '',
      jobValue: '',
      phoneValue: '',
      emailValue: '',
      checked: false

    }
  },
  handleFullName (e) {
    this.setState({
      nameValue: e.target.value
    })
  },
  handleJob (e) {
    this.setState({
      jobValue: e.target.value
    })
  },
  handlePhone (e) {
    this.setState({
      phoneValue: e.target.value
    })
  },
  handleEmail (e) {
    this.setState({
      emailValue: e.target.value
    })
  },
  handleCheck (e) {
    console.log(e.target.checked)
    this.setState({
      checked: e.target.checked
    })
  },
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <div className='step-one'>
            <StepOneTitle />
            <FullName
              nameValue={this.state.nameValue}
              handleFullName={this.handleFullName} />
            <JobTitle
              jobValue={this.state.jobValue}
              handleJob={this.handleJob}
            />
            <PhoneNumber
              phoneValue={this.state.phoneValue}
              handlePhone={this.handlePhone}
            />
            <EmailAddress
              emailValue={this.state.emailValue}
              handleEmail={this.handleEmail}
            />
            <CheckFrontDesk
              checked={this.state.checked}
              handleCheck={this.handleCheck}
            />
          </div>
          <div className='step-two'>
            <StepTwoTitle />
            <SignatureCard
              nameValue={this.state.nameValue}
              jobValue={this.state.jobValue}
              phoneValue={this.state.phoneValue}
              emailValue={this.state.emailValue}
              checked={this.state.checked}
            />
          </div>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
