import chalk from 'chalk'

export class CategoriesView {
  constructor ({ logService, formatService }) {
    this._logger = logService
    this._formatter = formatService
  }

  print (categoryGroups) {
    categoryGroups.forEach(group => {
      this._logger.print(chalk.green(group.name))
      group.categories.forEach(category => {
        const balance = this._formatter.milliUnitsToUsd(category.balance, 2)
        this._logger.print(`    ${category.name}: ${chalk.yellow(`${balance}`)}`)
      })
    })
  }
}
