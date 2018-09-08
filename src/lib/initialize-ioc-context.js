import { AuthController } from './controllers/auth.controller'
import { ConfigStoreService } from './services/config-store/config-store.service'
import { ConfigService } from './services/config/config.service'
import { YnabService } from './services/ynab/ynab.service'
import { CategoryService } from './services/ynab/category/category.service'
import { BudgetService } from './services/ynab/budget/budget.service'
import { BudgetController } from './controllers/budget.controller'
import { CategoryController } from './controllers/category.controller'
import { LogService } from './services/log/log.service'
import { UserService } from './services/ynab/user/user.service'
import { AccountController } from './controllers/account.controller'
import { AccountService } from './services/ynab/account/account.service'
import { FormatService } from './services/format/format.service'
import { Program } from './program'
import { initializeContext } from './ioc'

export function initializeIocContext () {
  return initializeContext({
    entryPoint: Program,
    providers: [
      AccountController,
      AccountService,
      AuthController,
      BudgetController,
      BudgetService,
      CategoryController,
      CategoryService,
      ConfigStoreService,
      ConfigService,
      FormatService,
      LogService,
      UserService,
      YnabService
    ]
  })
}
