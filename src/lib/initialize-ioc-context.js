import { provideAll } from './ioc/provide'
import { AuthController } from './controllers/auth.controller'
import { CliService } from './services/cli/cli.service'
import { ConfigStoreService } from './services/config-store/config-store.service'
import { ConfigService } from './services/config/config.service'
import { Program } from './program'
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

export function initializeIocContext () {
  provideAll([
    AccountController,
    AccountService,
    AuthController,
    BudgetController,
    BudgetService,
    CategoryController,
    CategoryService,
    CliService,
    ConfigStoreService,
    ConfigService,
    FormatService,
    LogService,
    Program,
    UserService,
    YnabService
  ])
}
