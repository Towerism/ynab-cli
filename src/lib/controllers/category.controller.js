import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import { drop } from 'lodash'
import { utils } from 'ynab'

@Controller({
  command: 'category',
  options: [['-l, --list <budgetId>', 'list all categories']]
})
class CategoryController {
  constructor ({ categoryService, logService }) {
    this._categoryService = categoryService
    this._logger = logService
  }

  @Action({ forOptions: options => options.list })
  async list ({ list }) {
    const { data } = await this._categoryService.list(list)
    drop(data.category_groups, 1).forEach(group => {
      this._logger.print(chalk.green(group.name))
      group.categories.forEach(category => {
        const balance = utils.convertMilliUnitsToCurrencyAmount(category.balance, 2)
        this._logger.print(`    ${category.name}: ${chalk.yellow(`$${balance}`)}`)
      })
    })
  }
}

export { CategoryController }
