import React, {useState} from 'react'
import Show from '@/components/Show'
import { observerOption } from 'soul-react'

const Dashboard = () => {
  const state = {
    show: false
  }
  const [init_state, setState] = useState(state)
  const data = observerOption(init_state, setState)
  const handleShow = () => {
    data.show = !data.show
  }
  return <div>
    Dashboard
    <button onClick={handleShow}>handleShow</button>
    <Show show={data.show}>
      <div slot='body'>555</div>
      <div slot='footer'>88888</div>
    </Show>
  </div>
}

export default Dashboard
