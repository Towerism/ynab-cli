import { add, get } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { Injectable } from './injectable'
import { forEach, last } from 'lodash'
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
          .action(async (...args) => {
            const cmd = last(args)
            for (const { forOptions, methodName } of actionsForOptions) {
              if (forOptions(cmd)) {
                await wrapAsync(async () => {
                  await instance[methodName](cmd)
                })
                break
              }
            }
          })
      })
    }
    Injectable()(constructor)
  }
}
