import { get } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import chalk from 'chalk'

export function Action (command) {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    const { registerCommands } = get(token)
    registerCommands.push((prefix, cliService, instance) => {
      cliService
        .command(`${prefix}:${command}`)
        .action(async (...args) => {
          try {
            await instance[methodName](...args)
          } catch (error) {
            console.log(chalk.bold.red(JSON.stringify(error, null, 2)))
          }
        })
    })
  }
}
