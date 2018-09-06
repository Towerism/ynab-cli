import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'

@Controller({
  command: 'auth',
  options: [
    ['-t, --token <token>', 'set token'],
    ['-u, --user', 'get user information']
  ]
})
class Authentication {
  constructor ({ configService, logService }) {
    this._config = configService
    this._logger = logService
  }

  @Action({ forOptions: options => options.token })
  setToken ({ token }) {
    this._config.token = token
    this._logger.print(`wrote token to config (token: ${this._config.token})`)
  }

  @Action({ forOptions: options => options.user })
  getToken () {
    this._logger.print(`token read from config: ${this._config.token}`)
  }
}

export { Authentication }
