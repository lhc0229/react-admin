import React, {useState} from 'react'
import Show from '@/components/Show'
import { observerOption, lifeCycleOption, watch } from 'soul-react'

const Dashboard = () => {
  const state = {
    show: true,
    visible: true,
    txt: 'txt',
    data: {
      b: 0,
      show: false
    },
    count: 200
  }

  const [init_state, setState] = useState(state)

  const data = observerOption(init_state, setState)

  console.log(data)

  const life_cycle = {
    didMount: () => {
      data.txt = 2
      console.log('didMount')
    },
    didUnMount: () => {
      console.log('didUnMount')
    }
  }

  lifeCycleOption(life_cycle)

  const handleShow = () => {
    // data.data.b = data.data.b + 3
    // data.data.show = !data.data.show
    data.show = !data.show
    data.visible = !data.visible
    data.data.b = data.data.b + 3
    console.log(data)
  }

  return <div>
    <div>
      Dashboard
    </div>
    <button onClick={handleShow}>handleShow----{`${data.show}`}</button>
    <Show show={data.show}>
      <div slot='body'>555</div>
      <div slot='footer'>88888</div>
    </Show>
    <div>
      <div>{ '---txt---' + data.txt }</div>
      <div>{ '---count---' + data.count }</div>
      <div>{ '---b---' + data.data.b }</div>
      <div>
        {
          data.visible ? 'visible' : 'visible55'
        }
      </div>
      <div>
        {
          data.data.show ? 'show' : 'showsssss'
        }
      </div>
    </div>
  </div>
}

export default Dashboard
