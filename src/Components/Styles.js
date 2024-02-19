import React, { Fragment } from 'react'

import { Button } from 'react-bootstrap'
export const Styles = () => {
  return (
    <Fragment className='box'>
        <p></p>
       { /* <button type="submit" className='Button'>Click</button> */}
       <Button variant="primary">Primary</Button>{' '}
       <Button variant="link">Link</Button>
    </Fragment>
  )
}
