import { initializeIocContext } from '../../src/lib/initialize-ioc-context'
import { resolve } from '../../src/lib/ioc/resolve'
import { Program } from '../../src/lib/program'
import { makeArgv } from './make-argv'

export async function runProgram (...args) {
  initializeIocContext()
  const program = resolve(Program)
  await program.run(makeArgv(args))
}
