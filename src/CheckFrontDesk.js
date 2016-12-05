import React from 'react'

const CheckFrontDesk = React.createClass({
  render () {
    return (
      <div>
        <input className='check-input' type='checkbox' />
        <span className='checkbox-title'>Include Front Desk Number</span>
      </div>
    )
  }
})

export default CheckFrontDesk
