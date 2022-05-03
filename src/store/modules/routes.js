import { v4 as uuid } from 'uuid'

const init_state = {
  front_router: [],
  back_router: [],
  other_router: []
}

export const routes_unique = uuid()

const state = (state = init_state, action) => {
  let new_state = state
  console.log('routes_unique')
  if (action.type === routes_unique) {
    new_state = {...new_state, ...action.data}
  }
  return new_state
}

export default state
