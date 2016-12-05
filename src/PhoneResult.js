import React from 'react'
const { string } = React.PropTypes

const PhoneResult = React.createClass({
  propTypes: {
    phoneValue: string
  },
  phoneToFormat () {
    const n = this.props.phoneValue.split('')
    const phoneNumber = ['Phone Number:', '(', n[0], n[1], n[2], ') ', n[3], n[4], n[5], '-', n[6], n[7], n[8], n[9]].join('')
    if (phoneNumber.length === 17) {
      return null
    } else {
      return phoneNumber
    }
  },
  render () {
    return (
      <div className='phone-displayed'>
        <h3>{this.phoneToFormat()}</h3>
      </div>
    )
  }
})

export default PhoneResult
