import React from 'react'
import SignatureLogo from './SignatureLogo'
import NameResult from './NameResult'
import JobResult from './JobResult'
import PhoneResult from './PhoneResult'
import JobLocation from './JobLocation'
import EmailResult from './EmailResult'
import ResultLocation from './ResultLocation'
import CheckedResult from './CheckedResult'
const { string, bool } = React.PropTypes

const SignatureCard = React.createClass({
  propTypes: {
    nameValue: string,
    jobValue: string,
    phoneValue: string,
    emailValue: string,
    checked: bool
  },
  render () {
    return (
      <div className='signature-card'>
        <div className='user-info'>
          <SignatureLogo />
          <div className='result-area'>
            <NameResult nameValue={this.props.nameValue} />
            <JobResult jobValue={this.props.jobValue} />
            <JobLocation />
          </div>
        </div>
        <div className='bottom-half-card'>
          <PhoneResult phoneValue={this.props.phoneValue} />
          <EmailResult emailValue={this.props.emailValue} />
          <CheckedResult checked={this.props.checked} />
          <ResultLocation checked={this.props.checked} />

        </div>
      </div>
    )
  }
})

export default SignatureCard
