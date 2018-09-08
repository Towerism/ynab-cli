import { EntryPoint } from './ioc'
import pjson from '../../package.json'

@EntryPoint({
  name: 'ynab',
  version: pjson.version
})
class Program {
  constructor ({ cliService, logService }) {
    this._cli = cliService
    this._cli
      .on('command:*', () => {
        logService.error(`Invalid command: ${cliService.args}\nSee --help for a list of available commands.`)
      })
  }

  run (argv) {
    this._cli.parse(argv)
  }
}

export { Program }
