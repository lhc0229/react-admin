import React from 'react'
import {useEffect, useState} from 'react'

const Show = (props) => {
  const [visible, setShow] = useState(props.show)
  useEffect(() => {
    setShow(props.show)
  }, [props])
  return <div>
    { visible ? props.children : '' }
  </div>
}

export default Show
