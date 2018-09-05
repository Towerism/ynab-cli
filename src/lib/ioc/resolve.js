import { container } from './container'
import { constructorToToken } from './constructor-to-token'

export function resolve (constructor) {
  return container.resolve(constructorToToken(constructor))
}
