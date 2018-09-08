import { Injectable } from '../../../ioc'

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
