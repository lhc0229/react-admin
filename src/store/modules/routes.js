import { v4 as uuid } from 'uuid'

const init_state = {
  front_router: [],
  back_router: [],
  other_router: []
}

export const routes_unique = uuid()

export const mutations = {
  setFrontRouter: (data) => {
    return (dispatch) => {
      dispatch({
        type: routes_unique,
        data: data
      })
    }
  },
  setBackRouter: (data) => {
    return (dispatch) => {
      dispatch({
        type: routes_unique,
        data: data
      })
    }
  },
  setOtherRouter: (data) => {
    return (dispatch) => {
      dispatch({
        type: routes_unique,
        data: data
      })
    }
  }
}

const state = (state = init_state, action) => {
  let new_state = state
  if (action.type === routes_unique) {
    new_state = {...new_state, ...action.data}
  }
  return new_state
}

export default state
