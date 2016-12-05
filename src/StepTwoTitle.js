import React from 'react'

const StepTwoTitle = React.createClass({
  render () {
    return (
      <div className='step-two-title-container'>
        <h3 className='step-two-title'>
          Step 2: Copy Your Signature
        </h3>
        <p className='step-two-info'>
          After filling out the form on the left, place your cursor inside the box below,
          select all (Control + A on a PC, Command + A on a Mac), and copy.
          Then, open Microsoft Outlook, paste into the Edit Signature box, and set as default signature.
        </p>
      </div>
    )
  }
})

export default StepTwoTitle
