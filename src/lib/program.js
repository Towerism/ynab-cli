import { Injectable } from './ioc/injectable'

@Injectable()
class Program {
  constructor ({ cliService }) {
    this._cli = cliService
  }

  run (argv) {
    this._cli.parse(argv)
  }
}

export { Program }
