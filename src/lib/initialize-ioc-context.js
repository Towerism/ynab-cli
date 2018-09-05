import { provideAll } from './ioc/provide'
import { Authentication } from './controllers/authentication'
import { CliService } from './services/cli/cli.service'
import { ConfigStoreService } from './services/config-store/config-store.service'
import { ConfigService } from './services/config/config.service'
import { Program } from './program'

export function initializeIocContext () {
  provideAll([
    Authentication,
    CliService,
    ConfigStoreService,
    ConfigService,
    Program
  ])
}
