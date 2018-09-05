import { container } from './container'
import { tokenFromConstructor } from './token-from-constructor'

export function resolve (constructor) {
  const token = tokenFromConstructor(constructor)
  return container.resolve(token)
}
