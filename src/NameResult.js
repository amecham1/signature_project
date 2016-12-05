import React from 'react'
const { string } = React.PropTypes

const NameResult = React.createClass({
  propTypes: {
    nameValue: string
  },
  nameToUpper () {
    return this.props.nameValue.toUpperCase()
  },
  render () {
    return (
      <div>
        <h3 className='name-displayed'>{this.nameToUpper()}</h3>
      </div>
    )
  }
})

export default NameResult
