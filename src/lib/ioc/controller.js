import { add, get } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { Injectable } from './injectable'
import { last } from 'lodash'
import { wrapAsync } from './wrap-async'

export function Controller (options) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, options)
    const { registerCommands, actionsForOptions } = get(token)
    if (options.command) {
      registerCommands.push((prefix, cliService, instance) => {
        const command = cliService
          .command(options.command)
        options.options.forEach(option => {
          command
            .option(...option)
        })
        command
          .action((...args) => {
            const cmd = last(args)
            actionsForOptions.forEach(async ({ forOptions, methodName }) => {
              if (forOptions(cmd)) {
                await wrapAsync(async () => {
                  await instance[methodName](cmd)
                })
              }
            })
          })
      })
    }
    Injectable()(constructor)
  }
}
