import React from 'react'
const { string, func } = React.PropTypes

const FullName = React.createClass({
  propTypes: {
    nameValue: string,
    handleFullName: func
  },
  render () {
    return (
      <div>
        <div className='input-name'>
          Full Name
        </div>
        <input className='user-input' type='text' defaultValue={this.props.nameValue} onChange={this.props.handleFullName} placeholder='Name' />
      </div>
    )
  }
})

export default FullName
