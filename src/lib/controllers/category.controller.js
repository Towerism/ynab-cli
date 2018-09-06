import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import { drop } from 'lodash'

@Controller({ prefix: 'category' })
class CategoryController {
  constructor ({ categoryService }) {
    this._categoryService = categoryService
  }

  @Action({ command: 'list <budgetId>' })
  async list (budgetId) {
    const { data } = await this._categoryService.list(budgetId)
    drop(data.category_groups, 1).forEach(group => {
      console.log(chalk.green(group.name))
      group.categories.forEach(category => {
        console.log(`    ${category.name}: ${chalk.yellow('$%d')}`, category.balance / 1000)
      })
    })
  }
}

export { CategoryController }
