import React from 'react'

const Show = (props) => {
  console.log(props.children)
  return <div>
    { props.show ? props.children : '' }
  </div>
}

export default Show
