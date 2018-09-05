#!/usr/bin/env node

import program from 'commander'
import { auth } from '../lib/auth'

program
  .name('ynab')
  .version('development-version')

auth(program)

program
  .parse(process.argv)
