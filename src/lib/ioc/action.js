import { get } from './controller-table'
import { constructorToToken } from './constructor-to-token'

export function Action (command) {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    const { registerCommands } = get(token)
    registerCommands.push((prefix, cliService, instance) => {
      cliService
        .command(`${prefix}:${command}`)
        .action(async (...args) => {
          await instance[methodName](...args)
        })
    })
  }
}
