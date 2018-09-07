#!/usr/bin/env node

import '@babel/polyfill'

import { resolve } from '../lib/ioc/resolve'
import { Program } from '../lib/program'
import { initializeIocContext } from '../lib/initialize-ioc-context'

initializeIocContext()

const program = resolve(Program)
program.run(process.argv)
