import { initializeIocContext } from '../../src/lib/initialize-ioc-context'
import { makeArgv } from './make-argv'

export async function runProgram (...args) {
  const { run } = initializeIocContext()
  await run(makeArgv(args))
}
