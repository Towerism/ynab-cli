import { Injectable } from './ioc/injectable'

@Injectable()
class Program {
  constructor ({ authentication, cliService }) {
    this._authentication = authentication
    this._cli = cliService
    this._initializeCLI()
  }

  _initializeCLI () {
    this._cli
      .command('auth [token]')
      .action(token => {
        this._authentication.authenticate(token)
      })
  }

  run () {
    this._cli.parse(process.argv)
  }
}

export { Program }
