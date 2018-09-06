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
    const { registerCommand, defineActions } = getControllerOptions(token)
    const command = registerCommand(cli)
    defineActions.forEach(defineAction => defineAction(command, instance))
  }
}
