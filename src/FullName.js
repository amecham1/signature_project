import React from 'react'

const FullName = React.createClass({
  render () {
    return (
      <div>
        <div className='input-name'>
          Full Name
        </div>
        <input className='user-input' type='text' />
      </div>
    )
  }
})

export default FullName
