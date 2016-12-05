import React from 'react'
const { string, func } = React.PropTypes

const EmailAddress = React.createClass({
  propTypes: {
    emailValue: string,
    handleEmail: func
  },
  render () {
    return (
      <div>
        <div className='input-name'>
          Email Address
        </div>
        <input className='user-input' type='text' defaultValue={this.props.emailValue} onChange={this.props.handleEmail} />
      </div>
    )
  }
})

export default EmailAddress
