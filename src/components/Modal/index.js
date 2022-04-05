import React from 'react'
import { Modal } from 'antd'

const Modals = (props) => {
  return <Modal title={props.title} visible={props.visible} onOk={props['handleOk']} onCancel={props['handleCancel']}>
    { props.children }
  </Modal>
}

export default Modals
