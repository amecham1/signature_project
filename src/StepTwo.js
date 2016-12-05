import React from 'react'
import StepTwoTitle from './StepTwoTitle'
import SignatureCard from './SignatureCard'
import NameResult from './NameResult'
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
        <NameResult />
      </div>
    )
  }
})

export default StepTwo
