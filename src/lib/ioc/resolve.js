import { container } from './container'
import { constructorToToken } from './constructor-to-token'
import { contains as controllerTableContains, get as getControllerOptions } from './controller-table'

export function resolve (token) {
  if (token.prototype != null) {
    token = constructorToToken(token)
  }
  const resolved = container.resolve(token)
  registerCommandIfController(token, resolved)
  return resolved
}

function registerCommandIfController (token, instance) {
  if (controllerTableContains(token)) {
    const cli = container.cradle.cliService
    const { registerCommand } = getControllerOptions(token)
    registerCommand(cli)
      .action(token => {
        instance.authenticate(token)
      })
  }
}
