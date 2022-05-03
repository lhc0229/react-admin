import { v4 as uuid } from 'uuid'
import { getToken } from '@/utils/token'

const init_state = {
  token: getToken(),
  user_name: null,
  email: null
}

export const user_unique = uuid()

const state = (state = init_state, action) => {
  let new_state = state
  console.log('user_unique')
  if (action.type === user_unique) {
    new_state = {...new_state, ...action.data}
  }
  return new_state
}

export default state
