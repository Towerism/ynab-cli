#!/usr/bin/env node

import program from 'commander'
import { resolve } from '../lib/ioc/resolve'
import { Authentication } from '../lib/controllers/authentication'
import { initializeIocContext } from '../lib/initialize-ioc-context'

initializeIocContext()

const authentication = resolve(Authentication)

program
  .name('ynab')
  .version('development-version')
  .command('auth [token]')
  .action(token => {
    authentication.authenticate(token)
  })

program.parse(process.argv)
