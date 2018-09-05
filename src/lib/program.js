import cli from 'commander'
import { Injectable } from './ioc/injectable'

@Injectable()
class Program {
  constructor ({ authentication }) {
    this._authentication = authentication
    this._cli = cli
    this._initializeCLI()
  }

  _initializeCLI () {
    this._cli
      .name('ynab')
      .version('development-version')
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
