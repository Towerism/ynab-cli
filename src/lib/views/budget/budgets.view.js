import chalk from 'chalk'

export class BudgetsView {
  constructor ({ logService, formatService }) {
    this._logger = logService
    this._formatter = formatService
  }

  print (budgets) {
    budgets.forEach(budget => {
      const lastModified = this._formatter.isoToLongDate(budget.lastModifiedOn)
      this._logger.print(`id: ${chalk.yellow(budget.id)}`)
      this._logger.print(`name: ${budget.name}`)
      this._logger.print(`modified: ${lastModified}\n`)
    })
  }
}
