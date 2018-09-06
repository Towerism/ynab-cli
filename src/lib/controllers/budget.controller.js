import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import moment from 'moment'

@Controller({
  command: 'budget',
  options: [['-l, --list', 'list all budgets']]
})
class BudgetController {
  constructor ({ budgetService, logService }) {
    this._budgetService = budgetService
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
}

export { BudgetController }
