import React from 'react'

const Template = (props) => {
  const { show } = props
  return <>{ show ? props.children : '' }</>
}

export default Template
