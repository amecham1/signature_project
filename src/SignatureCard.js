import React from 'react'
import SignatureLogo from './SignatureLogo'

const SignatureCard = React.createClass({
  render () {
    return (
      <div className='signature-card'>
        <div className='user-info'>
          <SignatureLogo />
        </div>
      </div>
    )
  }
})

export default SignatureCard
