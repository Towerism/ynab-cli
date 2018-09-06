import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import moment from 'moment'

@Controller({
  command: 'budget',
  options: [['-l, --list', 'list all budgets']]
})
class BudgetController {
  constructor ({ budgetService }) {
    this._budgetService = budgetService
  }

  @Action({ forOptions: options => options.list })
  async list () {
    const { data: { budgets } } = await this._budgetService.list()
    console.log(chalk.green(`Found ${budgets.length} budgets`))
    budgets.forEach(budget => {
      const lastModified = moment(budget.last_modified_on).format('LL')
      console.log(`id: ${chalk.yellow(budget.id)}`)
      console.log(`name: ${budget.name}`)
      console.log(`modified: ${lastModified}\n`)
    })
  }
}

export { BudgetController }
