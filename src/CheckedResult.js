import React from 'react'
const { bool, func } = React.PropTypes

const CheckResult = React.createClass({
  propTypes: {
    checked: bool,
    handleCheck: func
  },
  showNumber () {
    if (this.props.checked === true) {
      return (
        <div>
          <h3>Front Desk Number: 801-555-1234</h3>
        </div>
      )
    } else {
      return null
    }
  },
  render () {
    return (
      <div className='phone-displayed'>
        {this.showNumber()}
      </div>
    )
  }
})

export default CheckResult
