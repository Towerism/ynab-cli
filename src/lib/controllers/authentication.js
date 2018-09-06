import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'

@Controller({ prefix: 'auth' })
class Authentication {
  constructor ({ configService, logService }) {
    this._config = configService
    this._logger = logService
  }

  @Action({ command: 'set <token>' })
  setToken (token) {
    this._config.token = token
    this._logger.print('wrote token to config (token: %j)', this._config.token)
  }

  @Action({ command: 'get' })
  getToken () {
    this._logger.print('token read from config: %j', this._config.token)
  }
}

export { Authentication }
