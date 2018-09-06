import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import moment from 'moment'

@Controller({
  command: 'budget',
  options: [
    ['-l, --list', 'list all budgets'],
    ['-u, --use <budgetId>', 'use budget for subsequent commands']
  ]
})
class BudgetController {
  constructor ({ budgetService, configService, logService }) {
    this._budgetService = budgetService
    this._config = configService
    this._logger = logService
  }

  @Action({ forOptions: options => options.list })
  async list () {
    const { data: { budgets } } = await this._budgetService.list()
    this._logger.print(chalk.green(`Found ${budgets.length} budgets`))
    budgets.forEach(budget => {
      const lastModified = moment(budget.last_modified_on).format('LL')
      this._logger.print(`id: ${chalk.yellow(budget.id)}`)
      this._logger.print(`name: ${budget.name}`)
      this._logger.print(`modified: ${lastModified}\n`)
    })
  }

  @Action({ forOptions: options => options.use })
  async useBudgetId ({ use }) {
    this._config.activeBudgetId = use
  }
}

export { BudgetController }
