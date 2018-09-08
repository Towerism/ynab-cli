import cli from 'commander'
import { provide } from '../provide'

import pjson from '../../../../package.json'

cli
  .name('ynab')
  .version(pjson.version)

export const CliService = provide('cliService', {
  provider: {
    useValue: cli
  }
})
