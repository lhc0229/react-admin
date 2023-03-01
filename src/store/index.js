import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

const reducer = {}

const modulesFiles = require.context('./modules', true, /\.js$/)
modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    reducer[moduleName] = modules[moduleName]
    return modules
}, {})

export const store = createStore(combineReducers({...reducer}), {}, applyMiddleware(thunk))
