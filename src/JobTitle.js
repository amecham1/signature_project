import React from 'react'

const JobTitle = React.createClass({
  render () {
    return (
      <div>
        <div className='input-name'>
          Job Title
        </div>
        <input className='user-input' type='text' />
      </div>
    )
  }
})

export default JobTitle
