import chalk from 'chalk'

export class UserView {
  constructor ({ logService }) {
    this._logger = logService
  }

  print (user) {
    this._logger.print(`user id: ${chalk.yellow(user.id)}`)
  }
}
