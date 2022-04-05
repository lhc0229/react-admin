import React from 'react'

const Show = (props) => {
  return <div>
    { props.show ? props.children : '' }
  </div>
}

export default Show
