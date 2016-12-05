import React from 'react'
import StepOneTitle from './StepOneTitle'
import FullName from './FullName'
import JobTitle from './JobTitle'
import PhoneNumber from './PhoneNumber'
import EmailAddress from './EmailAddress'
import CheckFrontDesk from './CheckFrontDesk'

const StepOne = React.createClass({
  render () {
    return (
      <div>
        <StepOneTitle />
        <FullName />
        <JobTitle />
        <PhoneNumber />
        <EmailAddress />
        <CheckFrontDesk />
      </div>
    )
  }
})

export default StepOne
