import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'

@Controller('auth [token]')
class Authentication {
  constructor ({ configService }) {
    this._config = configService
  }

  @Action()
  authenticate (token) {
    if (token) {
      this._config.token = token
      console.log('wrote token to config (token: %j)', this._config.token)
    } else {
      console.log('token read from config: %j', this._config.token)
    }
  }
}

export { Authentication }
