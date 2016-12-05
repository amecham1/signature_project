import React from 'react'
import StepOneTitle from './StepOneTitle'
import FullName from './FullName'
import JobTitle from './JobTitle'
import PhoneNumber from './PhoneNumber'
import EmailAddress from './EmailAddress'
import CheckFrontDesk from './CheckFrontDesk'
const { string, func, number } = React.PropTypes

const StepOne = React.createClass({
  propTypes: {
    nameValue: string,
    jobValue: string,
    phoneValue: number,
    emailValue: string,
    handleFullName: func
  },
  render () {
    return (
      <div>
        <StepOneTitle />
        <FullName
          nameValue={this.props.nameValue}
          handleFullName={this.props.handleFullName} />
        <JobTitle
          jobValue={this.props.jobValue}
        />
        <PhoneNumber
          phoneValue={this.props.phoneValue}
        />
        <EmailAddress
          emailValue={this.props.emailValue}
        />
        <CheckFrontDesk />
      </div>
    )
  }
})

export default StepOne
