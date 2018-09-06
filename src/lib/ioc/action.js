import { get } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import chalk from 'chalk'

export function Action (action) {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    if (action.command) {
      addCommandsToRegister(token, action.command, methodName)
    } else {
      addActionsForOptions(token, action.forOptions, methodName)
    }
  }
}

function addCommandsToRegister (token, command, methodName) {
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

function addActionsForOptions (token, forOptions, methodName) {
  const { actionsForOptions } = get(token)
  actionsForOptions.push({ forOptions, methodName })
}
