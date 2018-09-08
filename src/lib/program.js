import { Injectable } from './ioc/injectable'

@Injectable()
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
