import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'

@Controller('auth')
class Authentication {
  constructor ({ configService }) {
    this._config = configService
  }

  @Action('set <token>')
  setToken (token) {
    this._config.token = token
    console.log('wrote token to config (token: %j)', this._config.token)
  }

  @Action('get')
  getToken () {
    console.log('token read from config: %j', this._config.token)
  }
}

export { Authentication }
