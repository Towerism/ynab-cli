import cli from 'commander'
import { provide } from '../../ioc/provide'

cli
  .name('ynab')
  .version('development-version')

export const CliService = provide('cliService', {
  provider: {
    useValue: cli
  }
})
