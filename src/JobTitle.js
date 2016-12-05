import React from 'react'
const { string, func } = React.PropTypes

const JobTitle = React.createClass({
  propTypes: {
    jobValue: string,
    handleJob: func
  },
  render () {
    return (
      <div>
        <div className='input-name'>
          Job Title
        </div>
        <input className='user-input' type='text' defaultValue={this.props.jobValue} onChange={this.props.handleJob} />
      </div>
    )
  }
})

export default JobTitle
