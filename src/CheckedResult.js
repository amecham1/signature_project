import React from 'react'
const { bool, func } = React.PropTypes

const CheckResult = React.createClass({
  propTypes: {
    checked: bool,
    handleCheck: func
  },
  showNumber () {
    console.log(this.props.checked)
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
      <div>
        {this.showNumber()}
      </div>
    )
  }
})

export default CheckResult
