import { provideAll } from './provide'
import { entryPointInfo } from './entry-point-info'
import { resolveEntryPoint } from './resolve-entry-point'

export function initializeIoc ({ entryPoint, providers }) {
  provideAll(providers)
  entryPointInfo.constructor = entryPoint
  return (args) => resolveEntryPoint().run(args)
}
