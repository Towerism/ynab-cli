import { container } from './container'
import { asClass, asValue } from 'awilix'
import { get, add } from './injection-table'
import { contains as controllerTableContains } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { resolveAll } from './resolve-all'

const controllersToResolve = []

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
  resolveAll(controllersToResolve)
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
  resolveIfController(token)
}

function resolveIfController (token) {
  if (controllerTableContains(token)) {
    controllersToResolve.push(token)
  }
}

function getProvider (options) {
  const provider = options.provider
  if (provider.useConstructor) {
    return asClass(provider.useConstructor, options)
  } else if (provider.useValue) {
    return asValue(provider.useValue)
  }
}