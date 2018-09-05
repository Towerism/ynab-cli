import { provideAll } from './ioc/provide'
import { Authentication } from './controllers/authentication'
import { ConfigStoreService } from './services/config-store/config-store.service'
import { ConfigService } from './services/config/config.service'
import { Program } from './program'

export function initializeIocContext () {
  provideAll([
    Authentication,
    ConfigStoreService,
    ConfigService,
    Program
  ])
}
