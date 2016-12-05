import React from 'react'

const EmailAddress = React.createClass({
  render () {
    return (
      <div>
        <div className='input-name'>
          Email Address
        </div>
        <input className='user-input' type='text' />
      </div>
    )
  }
})

export default EmailAddress
