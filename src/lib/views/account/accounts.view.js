import chalk from 'chalk'

export class AccountsView {
  constructor ({ logService, formatService }) {
    this._logger = logService
    this._formatter = formatService
  }

  print (accounts) {
    const format = (units) => this._formatter.milliUnitsToUsd(units)
    accounts.forEach(account => {
      this._logger.print(`${chalk.cyan(account.name)}`)
      this._logger.print(`balance: ${chalk.yellow(format(account.balance))}`)
      this._logger.print(`cleared: ${chalk.green(format(account.clearedBalance))}`)
      this._logger.print(`uncleared: ${chalk.red(format(account.unclearedBalance))}\n`)
    })
  }
}
