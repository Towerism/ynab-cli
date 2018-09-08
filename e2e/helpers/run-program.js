import { initializeIocContext } from '../../src/lib/initialize-ioc-context'
import { makeArgv } from './make-argv'
import { resolveEntryPoint } from '../../src/lib/ioc'

export async function runProgram (...args) {
  initializeIocContext()
  const program = resolveEntryPoint()
  await program.run(makeArgv(args))
}
