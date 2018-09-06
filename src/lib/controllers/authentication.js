import { Controller } from '../ioc/controller'
import { Action } from '../ioc/action'

@Controller()
class Authentication {
  constructor ({ configService }) {
    this._config = configService
  }

  @Action('auth [token]')
  authenticate (token) {
    if (token) {
      this._config.token = token
      console.log('wrote token to config (token: %j)', this._config.token)
    } else {
      console.log('token read from config: %j', this._config.token)
    }
  }

  @Action('other-auth [word]')
  otherAuth (word) {
    console.log('Hello other auth: %j', word)
  }
}

export { Authentication }
