import React from 'react'
const { bool, func } = React.PropTypes

const CheckFrontDesk = React.createClass({
  propTypes: {
    checked: bool,
    handleCheck: func
  },
  render () {
    return (
      <div>
        <input className='check-input' type='checkbox' onChange={this.props.handleCheck} checked={this.props.checked} />
        <span className='checkbox-title'>Include Front Desk Number</span>
      </div>
    )
  }
})

export default CheckFrontDesk
