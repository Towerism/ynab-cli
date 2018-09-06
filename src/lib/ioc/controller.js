import { add } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { Injectable } from './injectable'

export function Controller () {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, constructor)
    Injectable()(constructor)
  }
}
