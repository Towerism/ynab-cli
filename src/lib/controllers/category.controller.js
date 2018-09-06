import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import { drop } from 'lodash'

@Controller({ prefix: 'category' })
class CategoryController {
  constructor ({ categoryService, logService }) {
    this._categoryService = categoryService
    this._logger = logService
  }

  @Action({ command: 'list <budgetId>' })
  async list (budgetId) {
    const { data } = await this._categoryService.list(budgetId)
    drop(data.category_groups, 1).forEach(group => {
      this._logger.print(chalk.green(group.name))
      group.categories.forEach(category => {
        this._logger.print(`    ${category.name}: ${chalk.yellow('$%d')}`, category.balance / 1000)
      })
    })
  }
}

export { CategoryController }
