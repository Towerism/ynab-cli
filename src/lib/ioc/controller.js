import { add } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { Injectable } from './injectable'

export function Controller (command) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, {
      registerCommand (cli) {
        return cli.command(command)
      }
    })
    Injectable()(constructor)
  }
}
