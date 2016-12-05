import React from 'react'
const { string } = React.PropTypes

const EmailResult = React.createClass({
  propTypes: {
    emailValue: string
  },
  emailAdder () {
    const emailInput = ['Email: ', this.props.emailValue].join('')
    if (emailInput.length === 7) {
      return null
    }
    return emailInput
  },
  render () {
    return (
      <div className='email-displayed'>
        <h3>{this.emailAdder()}</h3>
      </div>
    )
  }
})

export default EmailResult
