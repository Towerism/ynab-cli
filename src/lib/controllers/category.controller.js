import { Controller } from '../ioc/decorators/controller'
import { Action } from '../ioc/decorators/action'
import { drop } from 'lodash'
import { CategoriesView } from '../views/category/categories.view'

@Controller({
  command: 'category',
  options: [['-l, --list [budgetId]', 'list all categories']]
})
class CategoryController {
  constructor ({ categoryService, configService }) {
    this._categoryService = categoryService
    this._config = configService
  }

  @Action({
    forOptions: options => typeof options.list === 'string',
    view: CategoriesView
  })
  async listForBudget ({ list }) {
    const { data } = await this._categoryService.list(list)
    return drop(data.category_groups, 1)
  }

  @Action({
    forOptions: options => options.list,
    view: CategoriesView
  })
  async listForActiveBudget () {
    return this.listForBudget({ list: this._config.activeBudgetId })
  }
}

export { CategoryController }
