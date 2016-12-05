import React from 'react'
import StepTwoTitle from './StepTwoTitle'
import SignatureCard from './SignatureCard'

// const { string } = React.PropTypes

const StepTwo = React.createClass({
  // propTypes: {
  //   nameValue: string
  // },
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
