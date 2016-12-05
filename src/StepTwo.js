import React from 'react'
import StepTwoTitle from './StepTwoTitle'
import SignatureCard from './SignatureCard'

const StepTwo = React.createClass({
  render () {
    return (
      <div>
        <StepTwoTitle />
        <SignatureCard />
      </div>
    )
  }
})

export default StepTwo
