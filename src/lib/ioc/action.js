import { get } from './controller-table'
import { constructorToToken } from './constructor-to-token'

export function Action (command) {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    const options = get(token)
    options.registerCommands.push((cliService, instance) => {
      cliService
        .command(command)
        .action((...args) => {
          instance[methodName](...args)
        })
    })
  }
}
