import { Controller } from '../ioc/decorators/controller'
import { Action } from '../ioc/decorators/action'
import { AccountsView } from '../views/account/accounts.view'

@Controller({
  command: 'account',
  options: [
    ['-l, --list [budgetId]', 'list all accounts']
  ]
})
class AccountController {
  constructor ({ accountService, configService }) {
    this._accountService = accountService
    this._config = configService
  }

  @Action({
    forOptions: options => typeof options.list === 'string',
    view: AccountsView
  })
  async listForBudget ({ list }) {
    const accounts = await this._accountService.listOpen(list)
    return accounts.map(account => {
      return {
        name: account.name,
        balance: account.balance,
        clearedBalance: account.cleared_balance,
        unclearedBalance: account.uncleared_balance
      }
    })
  }

  @Action({
    forOptions: options => options.list,
    view: AccountsView
  })
  async listForActiveBudget () {
    const id = this._config.activeBudgetId
    return this.listForBudget({ list: id })
  }
}

export { AccountController }
