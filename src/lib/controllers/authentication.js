import { Controller } from '../ioc/controller'

@Controller()
class Authentication {
  constructor ({ configService, cliService }) {
    this._config = configService
    cliService
      .command('auth [token]')
      .action(token => {
        this.authenticate(token)
      })
  }

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
