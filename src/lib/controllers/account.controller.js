import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'
import chalk from 'chalk'
import { utils } from 'ynab'
import { normalizeUnits } from '../../../node_modules/moment';

@Controller({
  command: 'account',
  options: [
    ['-l, --list [budgetId]', 'list all accounts']
  ]
})
class AccountController {
  constructor ({ accountService, configService, logService }) {
    this._accountService = accountService
    this._config = configService
    this._logger = logService
  }

  @Action({ forOptions: options => typeof options.list === 'string' })
  async listForBudget ({ list }) {
    const accounts = await this._accountService.listOpen(list)
    accounts.forEach(account => {
      const format = (units) => '$' + utils.convertMilliUnitsToCurrencyAmount(units, 2)
      this._logger.print(`${chalk.cyan(account.name)}`)
      this._logger.print(`balance: ${chalk.yellow(format(account.balance))}`)
      this._logger.print(`cleared: ${chalk.green(format(account.cleared_balance))}`)
      this._logger.print(`uncleared: ${chalk.red(format(account.uncleared_balance))}\n`)
    })
  }

  @Action({ forOptions: options => options.list })
  async listForActiveBudget () {
    const id = this._config.activeBudgetId
    await this.listForBudget({ list: id })
  }
}

export { AccountController }
