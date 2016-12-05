import React from 'react'

const PhoneNumber = React.createClass({
  render () {
    return (
      <div>
        <div className='input-name'>
          Phone Number
        </div>
        <input className='user-input' type='text' />
      </div>
    )
  }
})

export default PhoneNumber
