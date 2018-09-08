import { initializeIocContext } from '../../src/lib/initialize-ioc-context'
import { makeArgv } from './make-argv'
import { resolveEntryPoint } from '../../src/lib/ioc/resolve-entry-point'

export async function runProgram (...args) {
  initializeIocContext()
  const program = resolveEntryPoint()
  await program.run(makeArgv(args))
}
