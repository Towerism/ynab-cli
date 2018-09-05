import { Lifetime } from './lifetime'
import { constructorToToken } from './constructor-to-token'
import { add } from './injectionTable'

export function Injectable ({ lifetime, provider } = {}) {
  return constructor => {
    lifetime = lifetime || Lifetime.TRANSIENT
    const token = constructorToToken(constructor)
    provider = provider || { useConstructor: constructor }
    add(token, {
      lifetime,
      provider
    })
  }
}
