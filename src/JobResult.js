import React from 'react'
const { string } = React.PropTypes

const JobResult = React.createClass({
  propTypes: {
    jobValue: string
  },
  jobToUpper () {
    return this.props.jobValue.toUpperCase()
  },
  render () {
    return (
      <div>
        <h3 className='job-displayed'>{this.jobToUpper()}</h3>
      </div>
    )
  }
})

export default JobResult
