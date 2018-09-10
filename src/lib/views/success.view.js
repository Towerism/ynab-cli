import chalk from 'chalk'

export class SuccessView {
  constructor ({ logService }) {
    this._logger = logService
  }

  print (message) {
    this._logger.print(chalk.green(message))
  }
}
