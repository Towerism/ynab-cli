import { Injectable } from 'commander-mvc'

@Injectable()
class BudgetService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async list () {
    return this._ynab.budgets.getBudgets()
  }
}

export { BudgetService }
