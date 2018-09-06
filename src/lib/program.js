import { Injectable } from './ioc/injectable'

@Injectable()
class Program {
  constructor ({ cliService }) {
    this._cli = cliService
  }

  run () {
    this._cli.parse(process.argv)
  }
}

export { Program }
