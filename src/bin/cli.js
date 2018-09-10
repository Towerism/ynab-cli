#!/usr/bin/env node
import '@babel/polyfill'

import { initializeIocContext } from '../lib/initialize-ioc-context'

const { run } = initializeIocContext()

run(process.argv)
