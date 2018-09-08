import { Injectable } from '../../../ioc/decorators/injectable'
import { filter } from 'lodash'

@Injectable()
class AccountService {
  constructor ({ ynabService }) {
    this._ynab = ynabService
  }

  async list (budgetId) {
    const response = await this._ynab.accounts.getAccounts(budgetId)
    return response.data.accounts
  }

  async listOpen (budgetId) {
    const accounts = await this.list(budgetId)
    return filter(accounts, account => !account.closed && account.on_budget)
  }
}

export { AccountService }
