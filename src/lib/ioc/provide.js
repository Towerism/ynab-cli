import { container } from './container'
import { asClass, asValue } from 'awilix'
import { get, add } from './injectionTable'
import { constructorToToken } from './constructor-to-token'

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
}

export function provide (name, { lifetime, provider }) {
  add(name, { lifetime, provider })
  return name
}

function registerInjectable (injectable) {
  if (typeof injectable === 'string') {
    registerInjection(injectable, get(injectable))
  } else {
    const token = constructorToToken(injectable)
    registerInjection(token, get(token))
  }
}

function registerInjection (token, injection) {
  container.register({
    [token]: getProvider(injection)
  })
}

function getProvider (options) {
  const provider = options.provider
  if (provider.useConstructor) {
    return asClass(provider.useConstructor, options)
  } else if (provider.useValue) {
    return asValue(provider.useValue)
  }
}
