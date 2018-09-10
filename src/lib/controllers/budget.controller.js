import { Controller, Action } from 'commander-mvc'
import { BudgetsView } from '../views/budget/budgets.view'
import { UseBudgetView } from '../views/budget/use-budget-view'

@Controller({
  command: 'budget',
  options: [
    ['-l, --list', 'list all budgets'],
    ['-u, --use <budgetId>', 'use budget for subsequent commands']
  ]
})
class BudgetController {
  constructor ({ budgetService, configService }) {
    this._budgetService = budgetService
    this._config = configService
  }

  @Action({
    forOptions: options => options.list,
    view: BudgetsView
  })
  async list () {
    const { data: { budgets } } = await this._budgetService.list()
    return budgets.map(budget => {
      return {
        id: budget.id,
        name: budget.name,
        lastModifiedOn: budget.last_modified_on
      }
    })
  }

  @Action({
    forOptions: options => options.use,
    view: UseBudgetView
  })
  async useBudgetId ({ use }) {
    this._config.activeBudgetId = use
    return use
  }
}

export { BudgetController }
