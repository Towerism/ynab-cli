import { Injectable } from '../../../ioc/injectable'

@Injectable()
class BudgetService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async list () {
    try {
      return this._ynab.budgets.getBudgets()
    } catch (error) {
      console.error(error)
    }
  }
}

export { BudgetService }
