import { get } from './controller-table'
import { constructorToToken } from './constructor-to-token'

export function Action () {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    const options = get(token)
    if (!options.defineActions) {
      options.defineActions = []
    }
    options.defineActions.push((command, instance) => {
      command.action((...args) => {
        instance[methodName](...args)
      })
    })
  }
}
