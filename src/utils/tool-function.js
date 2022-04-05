import React from 'react'

export const deepClone = (target) => {
  let result
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = []
      for (const i in target) {
        result.push(deepClone(target[i]))
      }
    } else if (target === null) {
      result = null
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      result = {}
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}
