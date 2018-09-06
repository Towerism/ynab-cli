import { container } from './container'
import { constructorToToken } from './constructor-to-token'

export function resolve (providerToken) {
  if (typeof providerToken === 'string') {
    return container.resolve(providerToken)
  }
  return container.resolve(constructorToToken(providerToken))
}
