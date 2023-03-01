import { v4 as uuid } from 'uuid'

const init_state = {
    is_fold: localStorage.getItem('is_fold')
}

export const app_unique = uuid()

const state = (state = init_state, action) => {
    let new_state = state
    if (action.type === app_unique) {
        new_state = {...new_state, ...action.data}
    }
    return new_state
}

export default state
