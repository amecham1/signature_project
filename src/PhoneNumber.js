import React from 'react'
const { string, func } = React.PropTypes

const PhoneNumber = React.createClass({
  propTypes: {
    phoneValue: string,
    handlePhone: func
  },
  render () {
    return (
      <div>
        <div className='input-name'>
          Phone Number
        </div>
        <input className='user-input' type='text' defaultValue={this.props.phoneValue} onChange={this.props.handlePhone} />
      </div>
    )
  }
})

export default PhoneNumber
