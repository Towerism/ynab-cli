import { add } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { Injectable } from './injectable'

export function Controller (prefix = '') {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, {
      prefix
    })
    Injectable()(constructor)
  }
}
