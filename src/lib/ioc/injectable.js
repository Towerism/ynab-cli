import { container } from './container'
import { Lifetime } from './lifetime'
import { asClass } from 'awilix'
import { tokenFromConstructor } from './token-from-constructor'

export function Injectable (lifetime) {
  return constructor => {
    lifetime = lifetime || Lifetime.TRANSIENT
    const token = tokenFromConstructor(constructor)
    container.register({
      [token]: asClass(constructor, { lifetime })
    })
  }
}
