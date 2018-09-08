import chalk from 'chalk'

export class UseBudgetView {
  constructor ({ logService, formatService }) {
    this._logger = logService
    this._formatter = formatService
  }

  print (budgetId) {
    this._logger.print(
      this._formatter.successMessage(`Selected budget (id: ${chalk.yellow(budgetId)}) is now active`))
  }
}
